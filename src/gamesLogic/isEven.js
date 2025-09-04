import getRandomNumber from '../utils/random.js'

export function isEven(num) {
  return num % 2 === 0
}

export function generateRound() {
  const question = getRandomNumber(1, 100)
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  return { question, correctAnswer }
}

export const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'
