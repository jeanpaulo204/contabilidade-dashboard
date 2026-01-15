import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon } from "lucide-react"

const obligations = [
  {
    id: 1,
    type: "DAS",
    dueDate: "2026-01-20",
    value: 3250.0,
    status: "pending",
  },
  {
    id: 2,
    type: "FGTS",
    dueDate: "2026-01-07",
    value: 4200.0,
    status: "late",
  },
  {
    id: 3,
    type: "INSS",
    dueDate: "2026-01-15",
    value: 5800.0,
    status: "pending",
  },
  {
    id: 4,
    type: "GPS",
    dueDate: "2026-01-10",
    value: 2100.0,
    status: "paid",
  },
  {
    id: 5,
    type: "DARF",
    dueDate: "2026-01-25",
    value: 6500.0,
    status: "pending",
  },
]

const statusConfig = {
  pending: { label: "Pendente", className: "bg-warning text-warning-foreground" },
  paid: { label: "Pago", className: "bg-success text-success-foreground" },
  late: { label: "Atrasado", className: "bg-destructive text-destructive-foreground" },
}

export function UpcomingObligations({ showAll = false }: { showAll?: boolean }) {
  const displayedObligations = showAll ? obligations : obligations.slice(0, 3)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Próximas Obrigações</CardTitle>
        <CardDescription>{showAll ? "Todas as obrigações fiscais" : "Obrigações fiscais pendentes"}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {displayedObligations.map((obligation) => (
            <div key={obligation.id} className="flex items-center justify-between rounded-lg border border-border p-4">
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold">{obligation.type}</p>
                  <Badge className={statusConfig[obligation.status].className}>
                    {statusConfig[obligation.status].label}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarIcon className="h-4 w-4" />
                  <span>Vencimento: {new Date(obligation.dueDate).toLocaleDateString("pt-BR")}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">
                  R$ {obligation.value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </p>
              </div>
            </div>
          ))}

          {!showAll && obligations.length > 3 && (
            <div className="pt-2 text-center">
              <a href="/obrigacoes" className="text-sm font-medium text-primary hover:underline">
                Ver todas as obrigações →
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
