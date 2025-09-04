#!/usr/bin/env node
import startGame from '../src/index.js'
import { gameRules, generateRound } from '../src/gamesLogic/prime.js'

startGame(gameRules, generateRound)
