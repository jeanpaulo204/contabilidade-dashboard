import { DashboardLayout } from "@/components/dashboard-layout"
import { StatsCards } from "@/components/stats-cards"
import { RevenueChart } from "@/components/revenue-chart"
import { ExpensesByCategoryChart } from "@/components/expenses-by-category-chart"
import { ExpensesDistributionChart } from "@/components/expenses-distribution-chart"
import { UpcomingObligations } from "@/components/upcoming-obligations"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-balance">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Visão geral dos seus dados financeiros</p>
        </div>

        <StatsCards />

        <div className="grid gap-6 lg:grid-cols-2">
          <RevenueChart />
          <ExpensesByCategoryChart />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <UpcomingObligations />
          </div>
          <ExpensesDistributionChart />
        </div>
      </div>
    </DashboardLayout>
  )
}
