import getRandomNumber from '../utils/random.js'

export const gameRules = 'What number is missing in the progression?'

function creatProgression() {
  const start = getRandomNumber(0, 10)
  const step = getRandomNumber(1, 20)
  const progression = []
  const progressionLength = 10
  for (let i = 0; i < progressionLength; i++) {
    progression[i] = start + i * step
  }
  return progression
}

export function generateRound() {
  const progression = creatProgression()
  const randomIndex = getRandomNumber(0, 9)
  const correctAnswer = String(progression[randomIndex])
  progression[randomIndex] = '..'
  const question = progression.join(' ')

  return { question, correctAnswer }
}
