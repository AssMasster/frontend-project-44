#!/usr/bin/env node
import startGame from '../src/engine.js';
import { gameRules, generateRound } from '../src/gamesLogic/isEven.js';

startGame(gameRules, generateRound);