begin;

create schema if not exists office_tea_private;
grant usage on schema office_tea_private to authenticated;

create table public.ots_workspaces (
  slug text primary key check (slug ~ '^[a-z0-9-]{1,40}$'),
  name text not null check (char_length(btrim(name)) between 1 and 40),
  admin uuid not null references auth.users(id),
  phone text not null check (phone ~ '^[0-9]{12,15}$'),
  closed date
);

create table office_tea_private.members (
  slug text references public.ots_workspaces(slug) on delete cascade,
  uid uuid references auth.users(id) on delete cascade,
  primary key (slug, uid)
);
alter table office_tea_private.members enable row level security;

create table public.ots_orders (
  slug text references public.ots_workspaces(slug) on delete cascade,
  day date,
  uid uuid references auth.users(id) on delete cascade,
  name text not null check (char_length(btrim(name)) between 1 and 100),
  phone text not null check (phone ~ '^[0-9]{0,15}$'),
  items jsonb not null check (jsonb_typeof(items) = 'object' and pg_column_size(items) <= 4096),
  at bigint not null,
  primary key (slug, day, uid)
);

create table public.ots_photos (
  slug text references public.ots_workspaces(slug) on delete cascade,
  item text check (item ~ '^(tea[0-5]|cof[0-5]|sn[0-8]|b[1-3])$'),
  src text not null check (
    char_length(src) <= 700000 and
    src ~ '^data:image/(png|jpeg|webp|gif);base64,[a-zA-Z0-9+/]+={0,2}$'
  ),
  primary key (slug, item)
);

create function office_tea_private.is_member(code text)
returns boolean language sql stable security definer set search_path = ''
as $$
  select exists (
    select 1 from office_tea_private.members
    where slug = code and uid = (select auth.uid())
  );
$$;

create function office_tea_private.open_workspace(code text, title text, whatsapp text)
returns boolean language plpgsql security definer set search_path = ''
as $$
declare caller uuid := auth.uid();
begin
  if caller is null then
    raise exception 'Authentication required';
  end if;
  if title is not null then
    if code !~ '^[a-f0-9]{32}$' then
      raise exception 'Invalid workspace code';
    end if;
    insert into public.ots_workspaces (slug, name, admin, phone)
    values (code, title, caller, whatsapp);
  elsif not exists (select 1 from public.ots_workspaces where slug = code) then
    return false;
  end if;
  insert into office_tea_private.members (slug, uid) values (code, caller)
  on conflict do nothing;
  return true;
end;
$$;

create function public.ots_open_workspace(code text, title text default null, whatsapp text default null)
returns boolean language sql security invoker set search_path = ''
as $$
  select office_tea_private.open_workspace(code, title, whatsapp);
$$;

revoke all on function office_tea_private.is_member(text),
  office_tea_private.open_workspace(text,text,text), public.ots_open_workspace(text,text,text)
  from public, anon, authenticated;
grant execute on function office_tea_private.is_member(text),
  office_tea_private.open_workspace(text,text,text), public.ots_open_workspace(text,text,text)
  to authenticated;

alter table public.ots_workspaces enable row level security;
alter table public.ots_orders enable row level security;
alter table public.ots_photos enable row level security;

revoke all on public.ots_workspaces, public.ots_orders, public.ots_photos from public, anon, authenticated;
grant select, update (phone, closed) on public.ots_workspaces to authenticated;
grant select, insert, update (name, phone, items, at), delete on public.ots_orders to authenticated;
grant select, insert, update (src) on public.ots_photos to authenticated;

create policy workspace_members_read on public.ots_workspaces for select to authenticated
using (office_tea_private.is_member(slug));
create policy workspace_admin_updates on public.ots_workspaces for update to authenticated
using (admin = (select auth.uid())) with check (admin = (select auth.uid()));

create policy order_members_read on public.ots_orders for select to authenticated
using (office_tea_private.is_member(slug));
create policy order_member_creates on public.ots_orders for insert to authenticated
with check (
  uid = (select auth.uid()) and exists (
    select 1 from public.ots_workspaces w where w.slug = ots_orders.slug
      and (w.closed is distinct from ots_orders.day or w.admin = (select auth.uid()))
  )
);
create policy order_member_updates on public.ots_orders for update to authenticated
using (uid = (select auth.uid()) and office_tea_private.is_member(slug))
with check (
  uid = (select auth.uid()) and exists (
    select 1 from public.ots_workspaces w where w.slug = ots_orders.slug
      and (w.closed is distinct from ots_orders.day or w.admin = (select auth.uid()))
  )
);
create policy order_member_or_admin_deletes on public.ots_orders for delete to authenticated
using (
  office_tea_private.is_member(slug) and (
    uid = (select auth.uid()) or exists (
      select 1 from public.ots_workspaces w where w.slug = ots_orders.slug
        and w.admin = (select auth.uid())
    )
  )
);

create policy photo_members_read on public.ots_photos for select to authenticated
using (office_tea_private.is_member(slug));
create policy photo_admin_inserts on public.ots_photos for insert to authenticated
with check (exists (select 1 from public.ots_workspaces w where w.slug = ots_photos.slug and w.admin = (select auth.uid())));
create policy photo_admin_updates on public.ots_photos for update to authenticated
using (exists (select 1 from public.ots_workspaces w where w.slug = ots_photos.slug and w.admin = (select auth.uid())))
with check (exists (select 1 from public.ots_workspaces w where w.slug = ots_photos.slug and w.admin = (select auth.uid())));

create function public.ots_save_order(code text, order_day date, customer text, number text, quantities jsonb, ordered_at bigint)
returns void language sql security invoker set search_path = ''
as $$
  insert into public.ots_orders (slug, day, uid, name, phone, items, at)
  values (code, order_day, auth.uid(), customer, number, quantities, ordered_at)
  on conflict (slug, day, uid) do update set
    name = excluded.name, phone = excluded.phone, items = excluded.items, at = excluded.at;
$$;

create function public.ots_save_photo(code text, photo_item text, photo_src text)
returns void language sql security invoker set search_path = ''
as $$
  insert into public.ots_photos (slug, item, src) values (code, photo_item, photo_src)
  on conflict (slug, item) do update set src = excluded.src;
$$;

revoke all on function public.ots_save_order(text,date,text,text,jsonb,bigint),
  public.ots_save_photo(text,text,text) from public, anon, authenticated;
grant execute on function public.ots_save_order(text,date,text,text,jsonb,bigint),
  public.ots_save_photo(text,text,text) to authenticated;

commit;
