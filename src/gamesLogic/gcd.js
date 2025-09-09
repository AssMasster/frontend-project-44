import getRandomNumber from '../utils/random.js'

export const gameRules = 'Find the greatest common divisor of given numbers.'

function isDivisorOfNum (num, divisor) {
  return num % divisor === 0
}

function findNod(num1, num2) {
  const smallestNum = num1 > num2 ? num2 : num1
  for (let i = smallestNum; i > 1; i -= 1) {
    if (isDivisorOfNum(num1, i) && isDivisorOfNum(num2, i)) {
      return i
    }
  }
  return 1
}

export function generateRound() {
  const firstNumber = getRandomNumber(2, 100)
  const secondNumber = getRandomNumber(2, 100)

  const question = `${firstNumber} ${secondNumber}`
  const correctAnswer = String(findNod(firstNumber, secondNumber))

  return { question, correctAnswer }
}
