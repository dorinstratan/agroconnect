import Navbar from '@/components/layout/Navbar'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-end px-6 pb-20 pt-32 overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-400 to-[#1C2B1E] z-0" />
        <div className="absolute inset-0 z-1 opacity-5"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: '200px' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/40 to-transparent z-2" />

        <div className="relative z-10 max-w-3xl animate-fadeUp">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-xs text-white/85">Platforma #1 agricolă din Moldova</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6">
            Găsești tractor,<br />
            combină și <em className="text-amber-400">credit</em><br />
            direct din aplicație.
          </h1>

          <p className="text-lg text-white/70 font-light leading-relaxed mb-10 max-w-xl">
            Conectăm fermierii cu utilaje, servicii agricole și finanțare — rapid, transparent și fără telefoane inutile.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="/auth/register"
              className="bg-amber-400 text-earth-900 px-7 py-3.5 rounded-full text-base font-medium hover:-translate-y-0.5 hover:shadow-xl transition-all"
            >
              Începe gratuit →
            </Link>
            <a href="#cum-functioneaza" className="text-white/75 text-base border-b border-white/30 hover:text-white hover:border-white transition-colors pb-0.5">
              Cum funcționează
            </a>
          </div>
        </div>

        {/* Stats — desktop only */}
        <div className="absolute right-12 bottom-20 z-10 hidden lg:flex gap-1">
          {[
            { num: '247+', label: 'Fermieri activi' },
            { num: '83', label: 'Prestatori' },
            { num: '1 200+', label: 'ha lucrate' },
          ].map(s => (
            <div key={s.label} className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl px-6 py-5 text-center">
              <div className="font-serif text-3xl font-bold text-white">{s.num}</div>
              <div className="text-xs text-white/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CUM FUNCȚIONEAZĂ ── */}
      <section className="px-6 py-24 max-w-6xl mx-auto" id="cum-functioneaza">
        <p className="text-xs font-medium tracking-widest text-green-400 uppercase mb-3">Cum funcționează</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth-900 tracking-tight mb-14">
          4 pași simpli,<br />de la cerere la lucrare
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
          {[
            { n: '01', icon: '📝', title: 'Descrie ce ai nevoie', desc: 'Scrie simplu, în română: suprafața, locul și lucrarea. AI-ul înțelege tot.' },
            { n: '02', icon: '🤖', title: 'AI structurează cererea', desc: 'Asistentul extrage automat serviciul, suprafața, locația și perioada.' },
            { n: '03', icon: '📊', title: 'Primești oferte', desc: 'Prestatorii din zona ta trimit prețuri, disponibilitate și rating.' },
            { n: '04', icon: '✅', title: 'Confirmă și lucrează', desc: 'Alegi, confirmi digital și utilajul vine pe teren.' },
          ].map((s, i) => (
            <div
              key={s.n}
              className={`bg-white border border-[#2C2416]/8 p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-200
                ${i === 0 ? 'rounded-l-2xl' : ''} ${i === 3 ? 'rounded-r-2xl' : ''}`}
            >
              <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center text-lg mb-4">{s.icon}</div>
              <div className="font-serif text-6xl font-black text-green-50 leading-none mb-4">{s.n}</div>
              <div className="font-medium text-earth-900 mb-2">{s.title}</div>
              <div className="text-sm text-earth-400 leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PENTRU CINE ── */}
      <section className="bg-earth-900 px-6 py-24" id="pentru-cine">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-medium tracking-widest text-amber-400 uppercase mb-3">Pentru cine</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#FAF8F3] tracking-tight mb-12">
            Construită pentru toți<br />actorii din agricultură
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: '🌾', title: 'Fermieri & producători',
                desc: 'De la 1 ha la mii de hectare — găsești orice serviciu rapid și la prețul corect.',
                features: ['Cerere în 2 minute', 'Oferte multiple instant', 'Chat direct cu prestatorul', 'Credit agricol integrat'],
                bg: 'bg-[#1C3028]', accent: 'text-green-400',
              },
              {
                icon: '🚜', title: 'Proprietari de utilaje',
                desc: 'Monetizează tractoarele și combinele când nu le folosești pe propriul teren.',
                features: ['Profil verificat și rating', 'Calendar disponibilitate', 'Prețuri per ha, oră sau zi', 'Plăți online securizate'],
                bg: 'bg-[#2C2416] border border-amber-400/20', accent: 'text-amber-400',
              },
              {
                icon: '🏢', title: 'Companii partenere',
                desc: 'Furnizori de inputuri, credite și asigurări — acces direct la fermieri calificați.',
                features: ['Lead-uri calificate', 'Date agregate de piață', 'Integrare API platformă', 'Rapoarte B2B'],
                bg: 'bg-[#1A2420]', accent: 'text-green-400',
              },
            ].map(c => (
              <div key={c.title} className={`${c.bg} rounded-2xl p-8 hover:-translate-y-1 transition-all duration-200`}>
                <span className="text-4xl block mb-5">{c.icon}</span>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">{c.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6">{c.desc}</p>
                <ul className="space-y-2">
                  {c.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/65">
                      <span className={`${c.accent} text-xs`}>→</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SECTION ── */}
      <section className="bg-[#F2EDE3] px-6 py-24" id="ai">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Visual mockup */}
          <div className="bg-white rounded-2xl border border-[#2C2416]/8 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5 pb-4 border-b border-[#2C2416]/6">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
              <span className="text-xs text-earth-400">Asistent AI · activ</span>
            </div>
            <div className="space-y-3">
              <div className="bg-green-400 text-white rounded-2xl rounded-br-sm px-4 py-3 text-sm self-end ml-auto max-w-xs">
                Am 20 ha la Orhei și am nevoie de pregătire teren pentru porumb în mai.
              </div>
              <div className="bg-[#FAF8F3] border border-[#2C2416]/8 rounded-2xl rounded-bl-sm px-4 py-3 text-sm max-w-xs">
                Am înțeles! Am structurat cererea ta:
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {[
                    { l: 'Serviciu: arat', c: 'bg-green-50 text-green-600' },
                    { l: '20 ha · Orhei', c: 'bg-blue-50 text-blue-600' },
                    { l: 'Porumb', c: 'bg-green-50 text-green-600' },
                    { l: 'Mai', c: 'bg-amber-50 text-amber-600' },
                    { l: '~17 000 lei', c: 'bg-amber-50 text-amber-600' },
                  ].map(t => (
                    <span key={t.l} className={`${t.c} text-xs px-2.5 py-0.5 rounded-full font-medium`}>{t.l}</span>
                  ))}
                </div>
              </div>
              <div className="bg-[#FAF8F3] border border-[#2C2416]/8 rounded-2xl rounded-bl-sm px-4 py-3 text-sm max-w-xs">
                Am găsit 3 prestatori în zona ta, disponibili în mai. Cel mai aproape e la 5 km. →
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs font-medium tracking-widest text-green-400 uppercase mb-3">Asistent AI integrat</p>
            <h2 className="font-serif text-4xl font-bold text-earth-900 tracking-tight mb-4">
              Scrii simplu,<br />platforma face restul
            </h2>
            <p className="text-earth-400 leading-relaxed mb-8">
              Nu trebuie să completezi formulare complicate. Descrie ce ai nevoie în cuvintele tale și AI-ul transformă mesajul într-o cerere structurată în secunde.
            </p>
            <div className="divide-y divide-[#2C2416]/6">
              {[
                { icon: '🎯', title: 'Matching inteligent', desc: 'Recomandă prestatorii după distanță, disponibilitate, preț și rating.' },
                { icon: '💰', title: 'Estimare preț', desc: 'Oferă un buget orientativ per hectar sau per lucrare, înainte de oferte.' },
                { icon: '📈', title: 'Analiză și rapoarte', desc: 'Date despre cerere, prețuri medii și sezonalitate pe regiuni.' },
                { icon: '💬', title: 'Suport 24/7', desc: 'Chatbot disponibil non-stop pentru fermieri și prestatori.' },
              ].map(b => (
                <div key={b.title} className="flex gap-3 py-4">
                  <div className="w-7 h-7 bg-green-50 rounded-lg flex items-center justify-center text-sm flex-shrink-0 mt-0.5">{b.icon}</div>
                  <div>
                    <span className="font-medium text-earth-900 text-sm">{b.title}</span>
                    <span className="text-earth-400 text-sm"> — {b.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PREȚURI ── */}
      <section className="px-6 py-24" id="preturi">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-widest text-green-400 uppercase mb-3">Prețuri</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth-900 tracking-tight">Simplu și transparent</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                role: 'Fermier', name: 'Cont gratuit', price: '0 lei', period: 'pentru totdeauna',
                features: ['Cereri nelimitate', 'Oferte de la prestatori', 'Chat cu prestatorul', 'Asistent AI de bază', 'Istoric comenzi'],
                featured: false, cta: 'Începe gratuit', href: '/auth/register',
              },
              {
                role: 'Prestator', name: 'Abonament Pro', price: '490 lei', period: '/ lună',
                features: ['Profil verificat + badge', 'Toate cererile din zonă', 'Calendar disponibilitate', 'Statistici și rapoarte', 'Suport prioritar'],
                featured: true, popular: true, cta: 'Înregistrează utilajul', href: '/auth/register',
              },
              {
                role: 'Companie parteneră', name: 'Plan Business', price: 'La cerere', period: 'pachet personalizat',
                features: ['Acces date agregate', 'Lead-uri calificate', 'Integrare API', 'Promovare platformă', 'Manager de cont dedicat'],
                featured: false, cta: 'Contactează-ne', href: 'mailto:contact@agroconnect.md',
              },
            ].map(p => (
              <div
                key={p.name}
                className={`relative rounded-2xl p-8 border transition-all hover:-translate-y-1 hover:shadow-lg
                  ${p.featured
                    ? 'bg-green-600 border-green-600'
                    : 'bg-white border-[#2C2416]/8'
                  }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-earth-900 text-xs font-medium px-4 py-1 rounded-full">
                    Cel mai ales
                  </div>
                )}
                <p className={`text-xs tracking-widest uppercase mb-2 ${p.featured ? 'text-white/50' : 'text-earth-400'}`}>{p.role}</p>
                <h3 className={`font-serif text-xl font-bold mb-4 ${p.featured ? 'text-white' : 'text-earth-900'}`}>{p.name}</h3>
                <div className={`font-serif text-4xl font-black ${p.featured ? 'text-white' : 'text-earth-900'}`}>{p.price}</div>
                <p className={`text-sm mb-6 ${p.featured ? 'text-white/50' : 'text-earth-400'}`}>{p.period}</p>
                <ul className="space-y-2 mb-8">
                  {p.features.map(f => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${p.featured ? 'text-white/75' : 'text-earth-400'}`}>
                      <span className={p.featured ? 'text-amber-400' : 'text-green-400'}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className={`block text-center py-2.5 rounded-full text-sm font-medium transition-all
                    ${p.featured
                      ? 'bg-amber-400 text-earth-900 hover:bg-amber-300'
                      : 'bg-green-50 text-green-600 hover:bg-green-400 hover:text-white'
                    }`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-green-600 to-green-400 rounded-3xl px-10 py-20 text-center relative overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full bg-white/5 -top-20 -right-20" />
          <div className="absolute w-64 h-64 rounded-full bg-white/5 -bottom-16 -left-16" />
          <div className="relative">
            <h2 className="font-serif text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              Gata să digitalizezi<br />ferma ta?
            </h2>
            <p className="text-white/70 text-lg mb-10">Înregistrează-te în 2 minute. Fără complicații, fără costuri ascunse.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/auth/register?rol=fermier" className="bg-white text-green-600 px-8 py-3.5 rounded-full font-medium text-base hover:-translate-y-0.5 hover:shadow-xl transition-all">
                Sunt fermier →
              </Link>
              <Link href="/auth/register?rol=prestator" className="bg-white/10 border border-white/25 text-white px-8 py-3.5 rounded-full font-medium text-base hover:bg-white/20 transition-all">
                Am utilaje / servicii
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#2C2416]/8 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-earth-400">
          <span className="font-serif text-lg font-bold text-earth-900">Agro<span className="text-green-400">Connect</span></span>
          <div className="flex gap-6 flex-wrap">
            <a href="#" className="hover:text-earth-900 transition-colors">Termeni</a>
            <a href="#" className="hover:text-earth-900 transition-colors">Confidențialitate</a>
            <a href="mailto:contact@agroconnect.md" className="hover:text-earth-900 transition-colors">contact@agroconnect.md</a>
          </div>
          <span>© 2025 AgroConnect. Chișinău, Moldova.</span>
        </div>
      </footer>
    </>
  )
}
