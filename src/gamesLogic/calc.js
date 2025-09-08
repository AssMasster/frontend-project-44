import getRandomNumber from '../utils/random.js'

export function generateRound() {
  const firstNumber = getRandomNumber(1, 50)
  const secondNumber = getRandomNumber(1, 50)

  const operations = ['+', '-', '*']
  const operationIndex = getRandomNumber(0, operations.length - 1) // выбираем случйную операцию из трех
  const operation = operations[operationIndex]

  let question
  let correctAnswer

  switch (operation) {
    case '+':
      question = `${firstNumber} + ${secondNumber}`
      correctAnswer = String(firstNumber + secondNumber)
      break
    case '-':
      question = `${firstNumber} - ${secondNumber}`
      correctAnswer = String(firstNumber - secondNumber)
      break
    case '*':
      question = `${firstNumber} * ${secondNumber}`
      correctAnswer = String(firstNumber * secondNumber)
      break
  }

  return { question, correctAnswer }
}

export const gameRules = 'What is the result of the expression?'
