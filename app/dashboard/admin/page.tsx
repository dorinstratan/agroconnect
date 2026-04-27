import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

const prestatori = [
  { id: 1, name: 'Pavel Lungu', sub: 'Tractor + combină · Ungheni', status: 'pending' },
  { id: 2, name: 'Maria Antohi', sub: 'Servicii irigare · Cahul', status: 'active' },
  { id: 3, name: 'GreenService SRL', sub: 'Drone + stropit · Chișinău', status: 'pending' },
]

const comenzi = [
  { fermier: 'Ion Rusu', prestator: 'Vasile Botnaru', desc: '20 ha arat', status: 'finalizat' },
  { fermier: 'Agro-Prim SRL', prestator: 'Agro-Tech', desc: '35 ha semănat', status: 'in_lucru' },
  { fermier: 'Gheorghe Micu', prestator: 'GreenService', desc: '80 ha stropit', status: 'asteptare' },
]

const statusBadge: Record<string, { label: string; color: 'amber' | 'green' | 'blue' | 'gray' }> = {
  pending:   { label: 'În așteptare', color: 'amber' },
  active:    { label: 'Aprobat',      color: 'green' },
  in_lucru:  { label: 'În lucru',     color: 'green' },
  finalizat: { label: 'Finalizat',    color: 'blue'  },
  asteptare: { label: 'Așteptare',    color: 'amber' },
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <header className="bg-white border-b border-[#2C2416]/8 px-6 py-4 flex items-center justify-between">
        <span className="font-serif text-xl font-bold text-earth-900">Agro<span className="text-green-400">Connect</span> <span className="text-sm font-sans font-normal text-earth-400">Admin</span></span>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { num: '247', label: 'Fermieri' },
            { num: '83',  label: 'Prestatori' },
            { num: '31',  label: 'Comenzi azi' },
            { num: '94k', label: 'Comision lei' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl border border-[#2C2416]/8 p-4 text-center">
              <div className="font-serif text-2xl font-bold text-earth-900">{s.num}</div>
              <div className="text-xs text-earth-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Validare prestatori */}
        <div>
          <h2 className="text-sm font-medium text-earth-900 mb-3">Validare prestatori noi</h2>
          <div className="bg-white rounded-2xl border border-[#2C2416]/8 divide-y divide-[#2C2416]/6">
            {prestatori.map(p => (
              <div key={p.id} className="flex items-center gap-3 px-5 py-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-xs font-medium text-blue-600 flex-shrink-0">
                  {p.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-earth-900">{p.name}</div>
                  <div className="text-xs text-earth-400">{p.sub}</div>
                </div>
                <Badge color={statusBadge[p.status]?.color}>{statusBadge[p.status]?.label}</Badge>
                {p.status === 'pending' && (
                  <Button size="sm" variant="secondary">Aprobă</Button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Comenzi recente */}
        <div>
          <h2 className="text-sm font-medium text-earth-900 mb-3">Comenzi recente</h2>
          <div className="bg-white rounded-2xl border border-[#2C2416]/8 divide-y divide-[#2C2416]/6">
            {comenzi.map((c, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-4">
                <div className="flex-1 text-sm text-earth-900">
                  {c.fermier} → {c.prestator} · {c.desc}
                </div>
                <Badge color={statusBadge[c.status]?.color}>{statusBadge[c.status]?.label}</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
