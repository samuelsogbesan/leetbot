/**
 * Trims the given command.
 * @param {*} command 
 * @throws if the given error is illformed.
 */
const trimCommand = (command) => {
  if (!/^--\w+$/.test(command)) {
    return new Error('Command is does not conform to regex.');
  } else {
    return command.substring(2, command.length);
  }
}

/**
 * Trims the given argument.
 * @param {*} command 
 * @throws if the given error is illformed.
 */
const trimArg = () => {
  if (!/^-\w+$/.test(command)) {
    return new Error('Command is does not conform to regex.');
  } else {
    return command.substring(2, command.length);
  }
}

module.exports = {
  trimCommand,
  trimArg
}
