import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

interface ChartData {
  [key: string]: string | number
}

interface BarChartProps {
  data: ChartData[]
  index: string
  categories: string[]
  colors: string[]
  valueFormatter?: (value: number) => string
  yAxisWidth?: number
  height?: number
}

export function BarChartComponent({
  data,
  index,
  categories,
  colors,
  valueFormatter,
  yAxisWidth,
  height,
}: BarChartProps) {
  return (
    <BarChart width={500} height={height || 300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={index} />
      <YAxis width={yAxisWidth} tickFormatter={valueFormatter} />
      <Tooltip formatter={valueFormatter} />
      <Legend />
      {categories.map((category, i) => (
        <Bar key={category} dataKey={category} fill={colors[i]} />
      ))}
    </BarChart>
  )
}

interface LineChartProps {
  data: ChartData[]
  index: string
  categories: string[]
  colors: string[]
  valueFormatter?: (value: number) => string
  yAxisWidth?: number
  height?: number
}

export function LineChartComponent({
  data,
  index,
  categories,
  colors,
  valueFormatter,
  yAxisWidth,
  height,
}: LineChartProps) {
  return (
    <LineChart width={500} height={height || 300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={index} />
      <YAxis width={yAxisWidth} tickFormatter={valueFormatter} />
      <Tooltip formatter={valueFormatter} />
      <Legend />
      {categories.map((category, i) => (
        <Line key={category} type="monotone" dataKey={category} stroke={colors[i]} />
      ))}
    </LineChart>
  )
}

export { BarChartComponent as BarChart, LineChartComponent as LineChart }
