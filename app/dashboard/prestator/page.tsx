import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

const cereri = [
  { id: 1, serviciu: 'Arat + pregătire teren · Porumb', suprafata: '20 ha', locatie: 'Orhei', perioada: '3–10 mai', buget: '~17 000 lei', urgent: true },
  { id: 2, serviciu: 'Semănat floarea-soarelui', suprafata: '35 ha', locatie: 'Strășeni', perioada: '15–20 mai', buget: 'negociabil', urgent: false },
  { id: 3, serviciu: 'Stropit grâu · dronă agricolă', suprafata: '80 ha', locatie: 'Hîncești', perioada: '1–5 mai', buget: 'la ofertă', urgent: false },
]

export default function PrestatorDashboard() {
  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <header className="bg-white border-b border-[#2C2416]/8 px-6 py-4 flex items-center justify-between">
        <span className="font-serif text-xl font-bold text-earth-900">Agro<span className="text-green-400">Connect</span></span>
        <div className="flex items-center gap-3">
          <Badge color="green">✓ Verificat</Badge>
          <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-sm font-medium text-green-600">VB</div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { num: '12', label: 'Cereri noi' },
            { num: '4',  label: 'Active' },
            { num: '38', label: 'ha azi' },
            { num: '14.2k', label: 'Lei luna' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl border border-[#2C2416]/8 p-4 text-center">
              <div className="font-serif text-2xl font-bold text-earth-900">{s.num}</div>
              <div className="text-xs text-earth-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Cereri primite */}
        <div>
          <h2 className="text-sm font-medium text-earth-900 mb-3">Cereri primite</h2>
          <div className="space-y-3">
            {cereri.map(c => (
              <Card key={c.id} padding="sm">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-medium text-earth-900 text-sm">{c.serviciu}</h3>
                  <Badge color={c.urgent ? 'amber' : 'blue'}>{c.urgent ? 'Urgent' : 'Nou'}</Badge>
                </div>
                <div className="text-xs text-earth-400 leading-relaxed">
                  {c.suprafata} · {c.locatie} · {c.perioada} · Buget: {c.buget}
                </div>
                <div className="flex gap-2 mt-3">
                  <Button size="sm">Trimite ofertă</Button>
                  <Button size="sm" variant="ghost">Refuză</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
