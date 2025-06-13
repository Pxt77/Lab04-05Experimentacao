export interface ExperimentData {
  participante: number
  tarefa: number
  REST: number
  GraphQL: number
}

// Função para gerar dados simulados
function generateExperimentData(): ExperimentData[] {
  const data: ExperimentData[] = []

  // Para cada participante (1 a 20)
  for (let participante = 1; participante <= 20; participante++) {
    // Para cada tarefa (1 a 4)
    for (let tarefa = 1; tarefa <= 4; tarefa++) {
      // Gerar tempo REST (entre 15 e 25 minutos)
      const restTime = 15 + Math.random() * 10

      // GraphQL é geralmente mais rápido (60-80% do tempo REST)
      const graphqlTime = restTime * (0.6 + Math.random() * 0.2)

      data.push({
        participante,
        tarefa,
        REST: Number.parseFloat(restTime.toFixed(1)),
        GraphQL: Number.parseFloat(graphqlTime.toFixed(1)),
      })
    }
  }

  return data
}

export const experimentData = generateExperimentData()
