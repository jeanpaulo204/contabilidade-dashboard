import { DashboardLayout } from "@/components/dashboard-layout"
import { FinancialTable } from "@/components/financial-table"

export default function FinanceiroPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-balance">Financeiro</h1>
          <p className="text-muted-foreground mt-1">Gerencie suas receitas e despesas</p>
        </div>

        <FinancialTable />
      </div>
    </DashboardLayout>
  )
}
