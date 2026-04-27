# AgroConnect — Next.js + Supabase

Platformă digitală care conectează fermierii cu utilaje, servicii agricole și finanțare.

---

## Stack

- **Next.js 14** (App Router)
- **Supabase** (auth + bază de date PostgreSQL)
- **Tailwind CSS** (styling)
- **Claude API** (asistent AI)
- **TypeScript**

---

## Pornire locală

### 1. Instalare dependențe

```bash
cd agroconnect
npm install
```

### 2. Variabile de mediu

```bash
cp .env.local.example .env.local
```

Deschide `.env.local` și completează:
- `NEXT_PUBLIC_SUPABASE_URL` — din Supabase dashboard > Settings > API
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — același loc
- `ANTHROPIC_API_KEY` — din console.anthropic.com

### 3. Baza de date Supabase

1. Creează proiect nou pe [supabase.com](https://supabase.com)
2. Du-te la **SQL Editor**
3. Copiază și rulează conținutul din `lib/schema.sql`

### 4. Pornește aplicația

```bash
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000)

---

## Structura proiectului

```
agroconnect/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── layout.tsx                  # Layout global
│   ├── auth/
│   │   ├── login/page.tsx          # Autentificare
│   │   └── register/page.tsx       # Înregistrare
│   ├── dashboard/
│   │   ├── fermier/page.tsx        # Dashboard fermier
│   │   ├── prestator/page.tsx      # Dashboard prestator
│   │   └── admin/page.tsx          # Dashboard admin
│   └── api/
│       └── cereri/analyze/route.ts # API route AI
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Badge.tsx
│   ├── layout/
│   │   └── Navbar.tsx
│   └── forms/
│       └── AICerereForm.tsx        # Form cu AI integrat
├── lib/
│   ├── supabase.ts                 # Client Supabase
│   └── schema.sql                  # Schema baza de date
└── styles/
    └── globals.css
```

---

## Deploy pe Vercel

```bash
npm install -g vercel
vercel
```

Adaugă variabilele de mediu în Vercel dashboard.

---

## Pages disponibile

| URL | Descriere |
|-----|-----------|
| `/` | Landing page |
| `/auth/login` | Login |
| `/auth/register` | Înregistrare (fermier / prestator) |
| `/dashboard/fermier` | Dashboard fermier + AI |
| `/dashboard/prestator` | Dashboard prestator |
| `/dashboard/admin` | Panou admin |
