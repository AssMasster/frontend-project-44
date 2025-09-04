#!/usr/bin/env node
import startGame from '../src/index.js';
import { gameRules, generateRound } from '../src/gamesLogic/progression.js';

startGame(gameRules, generateRound);