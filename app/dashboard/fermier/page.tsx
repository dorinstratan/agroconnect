import AICerereForm from '@/components/forms/AICerereForm'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

const mockCereri = [
  { id: 1, serviciu: 'Arat + pregătire teren', suprafata: '20 ha', locatie: 'Orhei', status: 'asteptare', oferte: 3, data: '24 apr' },
  { id: 2, serviciu: 'Semănat porumb', suprafata: '20 ha', locatie: 'Orhei', status: 'in_lucru', oferte: 1, data: '10 apr' },
  { id: 3, serviciu: 'Transport recoltă', suprafata: '—', locatie: 'Orhei → Chișinău', status: 'finalizat', oferte: 2, data: '20 mar' },
]

const statusConfig: Record<string, { label: string; color: 'amber' | 'green' | 'blue' | 'gray' }> = {
  asteptare: { label: 'În așteptare', color: 'amber' },
  acceptat:  { label: 'Acceptat',     color: 'blue'  },
  in_lucru:  { label: 'În lucru',     color: 'green' },
  finalizat: { label: 'Finalizat',    color: 'gray'  },
}

export default function FermierDashboard() {
  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      {/* Top bar */}
      <header className="bg-white border-b border-[#2C2416]/8 px-6 py-4 flex items-center justify-between">
        <span className="font-serif text-xl font-bold text-earth-900">Agro<span className="text-green-400">Connect</span></span>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-sm font-medium text-green-600">IM</div>
          <span className="text-sm text-earth-900 hidden sm:block">Ion Melnic</span>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { num: '3', label: 'Cereri active' },
            { num: '6', label: 'Oferte primite' },
            { num: '47 ha', label: 'Total lucrat' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl border border-[#2C2416]/8 p-4 text-center">
              <div className="font-serif text-2xl font-bold text-earth-900">{s.num}</div>
              <div className="text-xs text-earth-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* AI Form */}
        <div>
          <h2 className="text-sm font-medium text-earth-900 mb-3">Cerere nouă</h2>
          <AICerereForm />
        </div>

        {/* Cereri recente */}
        <div>
          <h2 className="text-sm font-medium text-earth-900 mb-3">Cererile mele</h2>
          <div className="space-y-3">
            {mockCereri.map(c => (
              <Card key={c.id} hover padding="sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="font-medium text-earth-900 text-sm">{c.serviciu}</div>
                    <div className="text-xs text-earth-400 mt-1">{c.suprafata} · {c.locatie} · {c.data}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <Badge color={statusConfig[c.status]?.color}>{statusConfig[c.status]?.label}</Badge>
                    {c.oferte > 0 && (
                      <span className="text-xs text-earth-400">{c.oferte} oferte</span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
