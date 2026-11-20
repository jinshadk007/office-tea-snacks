begin;
create table if not exists public.ots_menu_prices (
 slug text not null references public.ots_workspaces(slug) on delete cascade,
 item text not null,
 price numeric(8,2) not null check(price between 0 and 10000),
 primary key(slug,item)
);
alter table public.ots_menu_prices enable row level security;
revoke all on public.ots_menu_prices from public,anon,authenticated;
grant select on public.ots_menu_prices to authenticated;
drop policy if exists office_menu_read on public.ots_menu_prices;
create policy office_menu_read on public.ots_menu_prices for select to authenticated using(office_tea_private.is_member(slug));
insert into public.ots_menu_prices(slug,item,price)
select c.slug,v.item,v.price from office_tea_private.office_config c cross join(values
 ('tea0',10),('tea1',10),('tea2',12),('tea3',10),('tea4',10),('tea5',12),
 ('cof0',15),('cof1',15),('cof2',18),('cof3',15),('cof4',15),('cof5',18),
 ('sn0',12),('sn1',12),('sn2',10),('sn3',10),('sn4',20),('sn5',10),('sn6',10),('sn7',15),('sn8',12),('lime',20)
) v(item,price) on conflict(slug,item) do nothing;
create or replace function public.ots_set_menu_prices(prices jsonb)
returns void language plpgsql security definer set search_path='' as $$
declare code text; entry record; amount numeric;
begin
 select slug into code from office_tea_private.office_config;
 if not office_tea_private.is_office_admin(code) then raise exception 'Admin sign-in required' using errcode='42501'; end if;
 if prices is null or jsonb_typeof(prices)<>'object' or prices='{}'::jsonb or pg_column_size(prices)>4096 then raise exception 'Invalid menu prices'; end if;
 for entry in select key,value from jsonb_each(prices) loop
  if jsonb_typeof(entry.value)<>'number' then raise exception 'Prices must be numbers'; end if;
  amount:=(entry.value#>>'{}')::numeric;
  if amount<0 or amount>10000 or amount<>round(amount,2) then raise exception 'Use a price from 0 to 10000 with at most two decimals'; end if;
  update public.ots_menu_prices set price=amount where slug=code and item=entry.key;
  if not found then raise exception 'Unknown menu item'; end if;
 end loop;
end $$;
revoke all on function public.ots_set_menu_prices(jsonb) from public,anon,authenticated;
grant execute on function public.ots_set_menu_prices(jsonb) to authenticated;
alter table public.ots_orders add column if not exists unit_prices jsonb not null default '{}'::jsonb;
-- Record the price in the order, rather than recalculating old bills from today's menu.
update public.ots_orders o set unit_prices=coalesce((select jsonb_object_agg(p.item,p.price) from public.ots_menu_prices p where p.slug=o.slug and o.items?p.item),'{}'::jsonb)
where unit_prices='{}'::jsonb;
create or replace function office_tea_private.snapshot_order_prices()
returns trigger language plpgsql security definer set search_path='' as $$
begin
 if exists(select 1 from jsonb_each(new.items) x where not exists(select 1 from public.ots_menu_prices p where p.slug=new.slug and p.item=x.key)) then raise exception 'Unknown menu item'; end if;
 select coalesce(jsonb_object_agg(p.item,p.price),'{}'::jsonb) into new.unit_prices from public.ots_menu_prices p where p.slug=new.slug and new.items?p.item;
 return new;
end $$;
revoke all on function office_tea_private.snapshot_order_prices() from public,anon,authenticated;
drop trigger if exists snapshot_order_prices on public.ots_orders;
create trigger snapshot_order_prices before insert or update of items,at on public.ots_orders for each row execute function office_tea_private.snapshot_order_prices();
commit;
