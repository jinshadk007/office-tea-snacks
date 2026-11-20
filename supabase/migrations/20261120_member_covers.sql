begin;
alter table public.ots_photos drop constraint if exists ots_photos_item_check;
alter table public.ots_photos add constraint ots_photos_item_check
check(item ~ '^(tea[0-5]|cof[0-5]|sn[0-8]|b[1-3]|member-cover-team-member-(0[1-9]|1[0-2]))$');
create or replace function public.ots_member_covers()
returns table(item text,src text) language sql stable security definer set search_path='' as $$
 select p.item,p.src from public.ots_photos p join office_tea_private.office_config c on c.slug=p.slug
 where p.item ~ '^member-cover-team-member-(0[1-9]|1[0-2])$';
$$;
revoke all on function public.ots_member_covers() from public;
grant execute on function public.ots_member_covers() to anon,authenticated;
create table if not exists office_tea_private.member_names(
 member_id text primary key check(member_id ~ '^team-member-(0[1-9]|1[0-2])$'),
 name text not null check(char_length(trim(name)) between 1 and 60)
);
create unique index if not exists office_member_name_unique on office_tea_private.member_names(lower(name));
alter table office_tea_private.member_names enable row level security;
revoke all on office_tea_private.member_names from public,anon,authenticated;
insert into office_tea_private.member_names(member_id,name)
select 'team-member-'||lpad(n::text,2,'0'),'Team Member '||lpad(n::text,2,'0') from generate_series(1,12) n on conflict do nothing;
create or replace function public.ots_member_names()
returns table(member_id text,name text) language sql stable security definer set search_path='' as $$
 select member_id,name from office_tea_private.member_names order by member_id;
$$;
create or replace function public.ots_set_member_name(member_id text,new_name text)
returns void language plpgsql security definer set search_path='' as $$
declare office_slug text;
begin
 select slug into office_slug from office_tea_private.office_config;
 if not office_tea_private.is_office_admin(office_slug) then raise exception 'Admin sign-in required' using errcode='42501'; end if;
 if new_name is null or char_length(trim(new_name)) not between 1 and 60 then raise exception 'Use a name from 1 to 60 characters'; end if;
 update office_tea_private.member_names n set name=trim(new_name) where n.member_id=ots_set_member_name.member_id;
 if not found then raise exception 'Unknown member'; end if;
end $$;
revoke all on function public.ots_member_names() from public;
grant execute on function public.ots_member_names() to anon,authenticated;
revoke all on function public.ots_set_member_name(text,text) from public,anon;
grant execute on function public.ots_set_member_name(text,text) to authenticated;
commit;
