import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { ExperimentData } from "./data"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateStatistics(data: ExperimentData[]) {
  // Calcular média REST
  const restAvg = data.reduce((sum, item) => sum + item.REST, 0) / data.length

  // Calcular média GraphQL
  const graphqlAvg = data.reduce((sum, item) => sum + item.GraphQL, 0) / data.length

  // Calcular redução percentual
  const reductionPercent = ((restAvg - graphqlAvg) / restAvg) * 100

  return {
    restAvg,
    graphqlAvg,
    reductionPercent,
  }
}
