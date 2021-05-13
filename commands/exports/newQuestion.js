const Command = require("../models/Command");
const DIFFICULTY = require('../../constants/difficulty');
const { getRandomQuestion } = require("../../queries/Question");

/**
 * Replace the question of the current user
 */
let command = new Command(async (args) => {
  let { userGuildContext } = args._ctx;

  let { displayName, voice } = userGuildContext;

  let difficulty = args.difficulty || DIFFICULTY.EASY;

  if (voice.channel && voice.channel.parent.name === 'Interviews') {
    let question = await getRandomQuestion(difficulty);
    return [
      `@${displayName} Replacing your Question!`,
      `
      **New Question**: *${question.title || 'Question'}*
      **Difficulty**: *${question.difficulty}*
      **Rating**: *${question.rating}*
      **Points for solving**: *400*
      **Link**: *https://leetcode.com*
      `
    ];
  } else {
    return `You're not currently in an interview room. Join the Queue to get to work :D`;
  }
});

module.exports = { newQuestion: command };
