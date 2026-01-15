"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusIcon, ArrowUpIcon, ArrowDownIcon } from "lucide-react"

const transactions = [
  {
    id: 1,
    type: "Receita",
    category: "Vendas",
    value: 15000,
    date: "2026-01-15",
  },
  {
    id: 2,
    type: "Despesa",
    category: "Salários",
    value: -42000,
    date: "2026-01-05",
  },
  {
    id: 3,
    type: "Receita",
    category: "Serviços",
    value: 8500,
    date: "2026-01-12",
  },
  {
    id: 4,
    type: "Despesa",
    category: "Aluguel",
    value: -8000,
    date: "2026-01-03",
  },
  {
    id: 5,
    type: "Despesa",
    category: "Marketing",
    value: -3500,
    date: "2026-01-10",
  },
  {
    id: 6,
    type: "Receita",
    category: "Vendas",
    value: 22000,
    date: "2026-01-08",
  },
  {
    id: 7,
    type: "Despesa",
    category: "Fornecedores",
    value: -5800,
    date: "2026-01-14",
  },
]

export function FinancialTable() {
  const [month, setMonth] = useState("01")
  const [year, setYear] = useState("2026")

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle>Receitas e Despesas</CardTitle>
            <CardDescription>Histórico de lançamentos financeiros</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Select value={month} onValueChange={setMonth}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }, (_, i) => (
                  <SelectItem key={i + 1} value={String(i + 1).padStart(2, "0")}>
                    {new Date(2026, i, 1).toLocaleDateString("pt-BR", { month: "long" })}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={year} onValueChange={setYear}>
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2026">2026</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <PlusIcon className="h-4 w-4 mr-2" />
              Adicionar
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Tipo</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Categoria</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">Data</th>
                <th className="text-right py-3 px-4 font-medium text-sm text-muted-foreground">Valor</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-border last:border-0">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {transaction.type === "Receita" ? (
                        <div className="flex items-center gap-2 text-success">
                          <ArrowUpIcon className="h-4 w-4" />
                          <span className="font-medium">{transaction.type}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-destructive">
                          <ArrowDownIcon className="h-4 w-4" />
                          <span className="font-medium">{transaction.type}</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant="outline">{transaction.category}</Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    {new Date(transaction.date).toLocaleDateString("pt-BR")}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className={`font-semibold ${transaction.value > 0 ? "text-success" : "text-destructive"}`}>
                      R${" "}
                      {Math.abs(transaction.value).toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
