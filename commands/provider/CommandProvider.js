const Command = require("../models/Command");
const InvalidCommandError = require("../errors/InvalidCommandError");
const { newQuestion } = require("../exports/newQuestion");

const CommandProvider = {};
const commands = new Map();

// Define new commands here.
commands.set('new', newQuestion);

// The entry point to access the commands.
CommandProvider.getCommand = (commandName) => {
  let command = commands.get(commandName);
  if (command) {
    return command;
  } else {
    throw new InvalidCommandError(`${commandName} is not a command.`);
  }
}

module.exports = CommandProvider;
