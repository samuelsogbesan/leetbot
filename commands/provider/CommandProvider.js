const Command = require("./Command");

const CommandProvider = {};
const commands = {};

// Define each command here.
commands.session = new Command((args) => console.log(`hi with args ${args}`));

// The entry point to access the commands.
CommandProvider.getCommand = (commandName) => {
  if (commands[commandName]) {
    return commands[commandName];
  } else {
    return new Error(`${commandName} is not a command.`);
  }
}

module.exports = CommandProvider;
