#!/usr/bin/env node
import startGame from '../src/index.js'
import { gameRules, generateRound } from '../src/gamesLogic/isEven.js'

startGame(gameRules, generateRound)
