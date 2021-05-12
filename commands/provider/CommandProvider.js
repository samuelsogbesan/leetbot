const Command = require("../models/Command");
const InvalidCommandError = require("../errors/InvalidCommandError");
const { newQuestion } = require("../exports/newQuestion");

const CommandProvider = {};
const commands = {};

// Define each command here.
commands.helloWorld = new Command((args) => console.log(`Hello World! arguements: ${args.arg1}`));

commands.new = newQuestion;

// The entry point to access the commands.
CommandProvider.getCommand = (commandName) => {
  if (commands[commandName]) {
    return commands[commandName];
  } else {
    throw new InvalidCommandError(`${commandName} is not a command.`);
  }
}

module.exports = CommandProvider;
