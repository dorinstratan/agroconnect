-- ══════════════════════════════════════════
-- AgroConnect — Schema Supabase
-- Rulează în Supabase > SQL Editor
-- ══════════════════════════════════════════

-- Tipuri enum
create type user_role as enum ('fermier', 'prestator', 'admin');
create type order_status as enum ('asteptare', 'acceptat', 'in_lucru', 'finalizat', 'anulat');
create type service_type as enum ('arat', 'semanat', 'stropit', 'recoltat', 'transport', 'irigat', 'fertilizat', 'altele');

-- Profiluri utilizatori
create table profiles (
  id          uuid references auth.users on delete cascade primary key,
  role        user_role not null default 'fermier',
  full_name   text,
  phone       text,
  location    text,
  avatar_url  text,
  created_at  timestamptz default now()
);

-- Utilaje / servicii prestate
create table utilaje (
  id          uuid default gen_random_uuid() primary key,
  prestator_id uuid references profiles(id) on delete cascade,
  nume        text not null,
  tip         service_type not null,
  descriere   text,
  pret_ha     numeric,
  pret_ora    numeric,
  pret_zi     numeric,
  zona        text,
  capacitate  text,
  disponibil  boolean default true,
  verificat   boolean default false,
  created_at  timestamptz default now()
);

-- Cereri de lucrări de la fermieri
create table cereri (
  id            uuid default gen_random_uuid() primary key,
  fermier_id    uuid references profiles(id) on delete cascade,
  serviciu      service_type not null,
  suprafata_ha  numeric,
  locatie       text,
  cultura       text,
  perioada_start date,
  perioada_end   date,
  buget_estimat  numeric,
  descriere_ai   text,
  status         order_status default 'asteptare',
  created_at     timestamptz default now()
);

-- Oferte de la prestatori pentru cereri
create table oferte (
  id          uuid default gen_random_uuid() primary key,
  cerere_id   uuid references cereri(id) on delete cascade,
  prestator_id uuid references profiles(id) on delete cascade,
  utilaj_id   uuid references utilaje(id),
  pret_total  numeric,
  mesaj       text,
  acceptata   boolean default false,
  created_at  timestamptz default now()
);

-- Mesaje chat
create table mesaje (
  id          uuid default gen_random_uuid() primary key,
  cerere_id   uuid references cereri(id) on delete cascade,
  sender_id   uuid references profiles(id),
  continut    text not null,
  created_at  timestamptz default now()
);

-- Recenzii
create table recenzii (
  id            uuid default gen_random_uuid() primary key,
  cerere_id     uuid references cereri(id),
  fermier_id    uuid references profiles(id),
  prestator_id  uuid references profiles(id),
  rating        int check (rating between 1 and 5),
  comentariu    text,
  created_at    timestamptz default now()
);

-- RLS (Row Level Security)
alter table profiles enable row level security;
alter table utilaje  enable row level security;
alter table cereri   enable row level security;
alter table oferte   enable row level security;
alter table mesaje   enable row level security;
alter table recenzii enable row level security;

-- Policies de bază
create policy "Utilizatorii văd propriul profil"
  on profiles for select using (auth.uid() = id);

create policy "Fermierii creează cereri"
  on cereri for insert with check (auth.uid() = fermier_id);

create policy "Toți văd cererile active"
  on cereri for select using (true);

create policy "Prestatorii creează oferte"
  on oferte for insert with check (auth.uid() = prestator_id);

create policy "Toți văd ofertele"
  on oferte for select using (true);
