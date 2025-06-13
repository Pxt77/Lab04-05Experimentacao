"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart } from "@/components/ui/chart"
import { experimentData } from "@/lib/data"
import { calculateStatistics } from "@/lib/utils"
import StatCard from "@/components/stat-card"

export default function Dashboard() {
  const stats = calculateStatistics(experimentData)

  // Prepare data for bar chart
  const barChartData = Array.from({ length: 20 }, (_, i) => {
    const participantId = i + 1
    const participantData = experimentData.filter((d) => d.participante === participantId)

    const restAvg = participantData.reduce((sum, d) => sum + d.REST, 0) / participantData.length
    const graphqlAvg = participantData.reduce((sum, d) => sum + d.GraphQL, 0) / participantData.length

    return {
      participante: `P${participantId}`,
      REST: Number.parseFloat(restAvg.toFixed(1)),
      GraphQL: Number.parseFloat(graphqlAvg.toFixed(1)),
    }
  })

  // Prepare data for line chart
  const lineChartData = Array.from({ length: 4 }, (_, i) => {
    const taskId = i + 1
    const taskData = experimentData.filter((d) => d.tarefa === taskId)

    const restAvg = taskData.reduce((sum, d) => sum + d.REST, 0) / taskData.length
    const graphqlAvg = taskData.reduce((sum, d) => sum + d.GraphQL, 0) / taskData.length

    return {
      tarefa: `Tarefa ${taskId}`,
      REST: Number.parseFloat(restAvg.toFixed(1)),
      GraphQL: Number.parseFloat(graphqlAvg.toFixed(1)),
    }
  })

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard - GraphQL vs REST</h1>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="analytics">Análise Detalhada</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <StatCard
                title="Tempo Médio REST"
                value={`${stats.restAvg.toFixed(1)} min`}
                description="Média de todas as tarefas"
                className="bg-blue-50 dark:bg-blue-950"
              />
              <StatCard
                title="Tempo Médio GraphQL"
                value={`${stats.graphqlAvg.toFixed(1)} min`}
                description="Média de todas as tarefas"
                className="bg-purple-50 dark:bg-purple-950"
              />
              <StatCard
                title="Redução Percentual"
                value={`${stats.reductionPercent.toFixed(1)}%`}
                description="Melhoria com GraphQL"
                className="bg-green-50 dark:bg-green-950"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-7 md:col-span-4">
                <CardHeader>
                  <CardTitle>Tempo Médio por Participante</CardTitle>
                  <CardDescription>Comparação do tempo médio de todas as tarefas por participante</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <BarChart
                    data={barChartData}
                    index="participante"
                    categories={["REST", "GraphQL"]}
                    colors={["blue", "purple"]}
                    valueFormatter={(value) => `${value} min`}
                    yAxisWidth={30}
                    height={350}
                  />
                </CardContent>
              </Card>

              <Card className="col-span-7 md:col-span-3">
                <CardHeader>
                  <CardTitle>Evolução por Tarefa</CardTitle>
                  <CardDescription>Tempo médio de todos os participantes por tarefa</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <LineChart
                    data={lineChartData}
                    index="tarefa"
                    categories={["REST", "GraphQL"]}
                    colors={["blue", "purple"]}
                    valueFormatter={(value) => `${value} min`}
                    yAxisWidth={30}
                    height={350}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-7">
                <CardHeader>
                  <CardTitle>Dados Detalhados</CardTitle>
                  <CardDescription>Análise completa dos tempos por participante e tarefa</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-4 border-b bg-muted/50 p-3 font-medium">
                      <div>Participante</div>
                      <div>Tarefa</div>
                      <div>REST (min)</div>
                      <div>GraphQL (min)</div>
                    </div>
                    <div className="max-h-[400px] overflow-auto">
                      {experimentData.slice(0, 20).map((item, i) => (
                        <div key={i} className="grid grid-cols-4 p-3 even:bg-muted/50">
                          <div>P{item.participante}</div>
                          <div>T{item.tarefa}</div>
                          <div>{item.REST}</div>
                          <div>{item.GraphQL}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
