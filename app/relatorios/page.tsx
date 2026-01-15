import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"

export default function RelatoriosPage() {
  const currentMonth = {
    revenue: 125000,
    expenses: 78000,
    profit: 47000,
    profitMargin: 37.6,
  }

  const previousMonth = {
    revenue: 108000,
    expenses: 72000,
    profit: 36000,
    profitMargin: 33.3,
  }

  const growth = {
    revenue: ((currentMonth.revenue - previousMonth.revenue) / previousMonth.revenue) * 100,
    expenses: ((currentMonth.expenses - previousMonth.expenses) / previousMonth.expenses) * 100,
    profit: ((currentMonth.profit - previousMonth.profit) / previousMonth.profit) * 100,
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-balance">Relatórios</h1>
          <p className="text-muted-foreground mt-1">Análise comparativa e indicadores de desempenho</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Comparativo Mensal</CardTitle>
              <CardDescription>Mês atual vs mês anterior</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Faturamento</span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">R$ {currentMonth.revenue.toLocaleString("pt-BR")}</span>
                    {growth.revenue > 0 ? (
                      <div className="flex items-center gap-1 text-sm font-medium text-success">
                        <ArrowUpIcon className="h-4 w-4" />
                        {growth.revenue.toFixed(1)}%
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-sm font-medium text-destructive">
                        <ArrowDownIcon className="h-4 w-4" />
                        {Math.abs(growth.revenue).toFixed(1)}%
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Anterior: R$ {previousMonth.revenue.toLocaleString("pt-BR")}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Despesas</span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">R$ {currentMonth.expenses.toLocaleString("pt-BR")}</span>
                    {growth.expenses > 0 ? (
                      <div className="flex items-center gap-1 text-sm font-medium text-destructive">
                        <ArrowUpIcon className="h-4 w-4" />
                        {growth.expenses.toFixed(1)}%
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-sm font-medium text-success">
                        <ArrowDownIcon className="h-4 w-4" />
                        {Math.abs(growth.expenses).toFixed(1)}%
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Anterior: R$ {previousMonth.expenses.toLocaleString("pt-BR")}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Lucro Líquido</span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">R$ {currentMonth.profit.toLocaleString("pt-BR")}</span>
                    {growth.profit > 0 ? (
                      <div className="flex items-center gap-1 text-sm font-medium text-success">
                        <ArrowUpIcon className="h-4 w-4" />
                        {growth.profit.toFixed(1)}%
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-sm font-medium text-destructive">
                        <ArrowDownIcon className="h-4 w-4" />
                        {Math.abs(growth.profit).toFixed(1)}%
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Anterior: R$ {previousMonth.profit.toLocaleString("pt-BR")}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Indicadores de Desempenho</CardTitle>
              <CardDescription>KPIs do período atual</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Margem de Lucro</span>
                  <span className="text-3xl font-bold text-success">{currentMonth.profitMargin.toFixed(1)}%</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Mês anterior: {previousMonth.profitMargin.toFixed(1)}%
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-success" style={{ width: `${currentMonth.profitMargin}%` }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Crescimento Mensal</span>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">{growth.revenue.toFixed(1)}%</span>
                    {growth.revenue > 0 ? (
                      <ArrowUpIcon className="h-6 w-6 text-success" />
                    ) : (
                      <ArrowDownIcon className="h-6 w-6 text-destructive" />
                    )}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">Baseado no faturamento do período</div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Eficiência Operacional</span>
                  <span className="text-3xl font-bold text-primary">
                    {((currentMonth.expenses / currentMonth.revenue) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">Despesas / Faturamento</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
