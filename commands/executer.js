const CommandProvider = require("./provider/CommandProvider");

/**
 * Responsible for executing commands.
 * @param {*} command - an object following the command schema.
 * A command is an object with a "command" string and a series of argument/value pairs.
 * @returns true if the command was executed correctly
 * @throws if the command could not be executed.
 */
const executer = (commandObject) => {
  let command;
  try {
    command = CommandProvider.getCommand(commandObject.command);
  } catch (err) {
    console.log(err);
    return false;
  }

  try {
    const effects = command.run(commandObject.args);
    console.log(`Return output: ${effects}`);
  } catch (err) {
    console.log(err);
    return false;
  }

  return true;
}

module.exports = executer;
