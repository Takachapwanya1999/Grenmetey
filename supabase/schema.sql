-- Minimal Supabase schema for profiles
-- Run this in Supabase SQL editor

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  first_name text,
  last_name text,
  phone text,
  address jsonb default '{}'::jsonb,
  role text check (role in ('customer','partner','admin')) default 'customer',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create or replace function public.handle_profile_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger profiles_updated_at
before update on public.profiles
for each row execute procedure public.handle_profile_updated_at();

-- RLS
alter table public.profiles enable row level security;

create policy "Profiles are viewable by owner"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);
