import readlineSync from 'readline-sync'
import greetUser from './utils/greetUser.js'
import showRule from './utils/showRules.js'

export default function startGame(gameRules, generateRound, roundCount = 3) {
  const getUserName = greetUser() // приветствуем пользователя и получаем его имя
  showRule(gameRules) // обьясняем правила игры

  for (let i = 0; i < roundCount; i++) {
    const { question, correctAnswer } = generateRound()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase().trim()

    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
      console.log(`Let's try again, ${getUserName}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${getUserName}!`)
};
