import getRandomNumber from '../utils/random.js'

export function isPrime(num) {
  if (num === 1) return true
  const halfOfNum = Math.floor(num / 2);
  for (let i = halfOfNum; i > 1; i -= 1) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

export function generateRound() {
  const question = getRandomNumber(1, 100)
  const correctAnswer = isPrime(question) ? 'yes' : 'no'
  return { question, correctAnswer }
}

export const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".'
