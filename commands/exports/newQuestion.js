const Command = require("../models/Command");
const DIFFICULTY = require('../../constants/difficulty');
const { getRandomQuestion } = require("../../queries/Question");

/**
 * Replace the question of the current user
 */
let command = new Command(async (args) => {
  let difficulty = args.difficulty || DIFFICULTY.EASY;

  let question = await getRandomQuestion(difficulty);
  return [
    '@s0g Replacing your Question!',
    `
    **New Question**: *${question.title || 'Question'}*
    **Difficulty**: *${question.difficulty}*
    **Rating**: *${question.rating}*
    **Points for solving**: *400*
    `
  ];
})

module.exports = { newQuestion: command };
