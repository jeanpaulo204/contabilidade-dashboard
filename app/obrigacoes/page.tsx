import { DashboardLayout } from "@/components/dashboard-layout"
import { UpcomingObligations } from "@/components/upcoming-obligations"

export default function ObrigacoesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-balance">Obrigações Fiscais</h1>
          <p className="text-muted-foreground mt-1">Acompanhe suas obrigações fiscais e tributárias</p>
        </div>

        <UpcomingObligations showAll />
      </div>
    </DashboardLayout>
  )
}
