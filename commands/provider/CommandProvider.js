const Command = require("./Command");
const InvalidCommandError = require("../errors/InvalidCommandError");

const CommandProvider = {};
const commands = {};

// Define each command here.
commands.helloWorld = new Command((args) => console.log(`Hello World! arguements: ${args.arg1}`));

// The entry point to access the commands.
CommandProvider.getCommand = (commandName) => {
  if (commands[commandName]) {
    return commands[commandName];
  } else {
    throw new InvalidCommandError(`${commandName} is not a command.`);
  }
}

module.exports = CommandProvider;
