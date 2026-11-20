begin;
create extension if not exists pgcrypto with schema extensions;
create table if not exists office_tea_private.office_config (
 singleton boolean primary key default true check(singleton),
 slug text not null references public.ots_workspaces(slug),
 password_hash text
);
create table if not exists office_tea_private.admin_sessions (
 uid uuid primary key references auth.users(id) on delete cascade,
 expires_at timestamptz not null
);
create table if not exists office_tea_private.admin_attempts (
 uid uuid primary key references auth.users(id) on delete cascade,
 failures integer not null default 0,
 next_try timestamptz not null default now()
);
alter table office_tea_private.office_config enable row level security;
alter table office_tea_private.admin_sessions enable row level security;
alter table office_tea_private.admin_attempts enable row level security;
revoke all on office_tea_private.office_config,office_tea_private.admin_sessions,office_tea_private.admin_attempts from public,anon,authenticated;
-- Keep the existing office and its order history; no new workspace is created.
insert into office_tea_private.office_config(singleton,slug)
select true,slug from public.ots_workspaces where slug='6a70010e2b0b9838c50b8d44070ad2f4'
on conflict(singleton) do nothing;
do $$ begin
 if not exists(select 1 from office_tea_private.office_config) then
  raise exception 'Select the office workspace before applying this migration';
 end if;
end $$;
create or replace function office_tea_private.is_office_admin(code text)
returns boolean language sql stable security definer set search_path='' as $$
 select exists(select 1 from office_tea_private.admin_sessions s join office_tea_private.office_config c on c.slug=code where s.uid=auth.uid() and s.expires_at>now());
$$;
create or replace function public.ots_join_office()
returns text language plpgsql security definer set search_path='' as $$
declare code text; begin
 if auth.uid() is null then raise exception 'Authentication required'; end if;
 select slug into strict code from office_tea_private.office_config;
 insert into office_tea_private.members(slug,uid) values(code,auth.uid()) on conflict do nothing;
 return code;
end $$;
create or replace function office_tea_private.open_workspace(code text,title text,whatsapp text)
returns boolean language plpgsql security definer set search_path='' as $$
begin
 if auth.uid() is null then raise exception 'Authentication required'; end if;
 if title is not null or not exists(select 1 from office_tea_private.office_config c where c.slug=code) then
  raise exception 'This shop is for one office only';
 end if;
 insert into office_tea_private.members(slug,uid) values(code,auth.uid()) on conflict do nothing;
 return true;
end $$;
create or replace function public.ots_admin_status()
returns boolean language sql stable security definer set search_path='' as $$
 select coalesce((select office_tea_private.is_office_admin(slug) from office_tea_private.office_config),false);
$$;
create or replace function public.ots_admin_login(password text)
returns boolean language plpgsql security definer set search_path='' as $$
declare caller uuid:=auth.uid(); stored text; attempts office_tea_private.admin_attempts%rowtype;
begin
 if caller is null then raise exception 'Authentication required'; end if;
 insert into office_tea_private.admin_attempts(uid) values(caller) on conflict do nothing;
 select * into attempts from office_tea_private.admin_attempts where uid=caller for update;
 if attempts.next_try>now() then return false; end if;
 select password_hash into stored from office_tea_private.office_config;
 if stored is null or length(password)>128 or extensions.crypt(password,stored) is distinct from stored then
  update office_tea_private.admin_attempts set failures=failures+1,next_try=now()+case when failures>=4 then interval '15 minutes' else interval '2 seconds' end where uid=caller;
  return false;
 end if;
 update office_tea_private.admin_attempts set failures=0,next_try=now() where uid=caller;
 insert into office_tea_private.admin_sessions(uid,expires_at) values(caller,now()+interval '8 hours') on conflict(uid) do update set expires_at=excluded.expires_at;
 return true;
end $$;
create or replace function public.ots_admin_logout()
returns void language sql security definer set search_path='' as $$
 delete from office_tea_private.admin_sessions where uid=auth.uid();
$$;
revoke all on function office_tea_private.is_office_admin(text),public.ots_join_office(),public.ots_admin_status(),public.ots_admin_login(text),public.ots_admin_logout() from public,anon,authenticated;
grant execute on function office_tea_private.is_office_admin(text),public.ots_join_office(),public.ots_admin_status(),public.ots_admin_login(text),public.ots_admin_logout() to authenticated;
alter policy workspace_admin_updates on public.ots_workspaces using(office_tea_private.is_office_admin(slug)) with check(office_tea_private.is_office_admin(slug));
alter policy order_member_creates on public.ots_orders with check(uid=auth.uid() and office_tea_private.is_member(slug) and exists(select 1 from public.ots_workspaces w where w.slug=ots_orders.slug and (w.closed is distinct from ots_orders.day or office_tea_private.is_office_admin(w.slug))));
alter policy order_member_updates on public.ots_orders with check(uid=auth.uid() and office_tea_private.is_member(slug) and exists(select 1 from public.ots_workspaces w where w.slug=ots_orders.slug and (w.closed is distinct from ots_orders.day or office_tea_private.is_office_admin(w.slug))));
alter policy order_member_or_admin_deletes on public.ots_orders using(office_tea_private.is_member(slug) and (uid=auth.uid() or office_tea_private.is_office_admin(slug)));
alter policy photo_admin_inserts on public.ots_photos with check(office_tea_private.is_office_admin(slug));
alter policy photo_admin_updates on public.ots_photos using(office_tea_private.is_office_admin(slug)) with check(office_tea_private.is_office_admin(slug));
commit;
