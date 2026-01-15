import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUpIcon, TrendingDownIcon, DollarSignIcon, ReceiptIcon } from "lucide-react"

const stats = [
  {
    title: "Faturamento do Mês",
    value: "R$ 125.000,00",
    change: "+12.5%",
    trend: "up",
    icon: DollarSignIcon,
  },
  {
    title: "Despesas do Mês",
    value: "R$ 78.000,00",
    change: "+8.3%",
    trend: "up",
    icon: TrendingDownIcon,
  },
  {
    title: "Lucro Líquido",
    value: "R$ 47.000,00",
    change: "+18.2%",
    trend: "up",
    icon: TrendingUpIcon,
  },
  {
    title: "Impostos Estimados",
    value: "R$ 14.250,00",
    change: "+5.7%",
    trend: "up",
    icon: ReceiptIcon,
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className={stat.trend === "up" ? "text-success" : "text-destructive"}>{stat.change}</span> em
              relação ao mês anterior
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
