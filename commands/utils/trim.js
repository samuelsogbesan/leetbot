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
const trimArg = (arg) => {
  if (!/^-\w+$/.test(arg)) {
    return new Error('Argument does not conform to regex.');
  } else {
    return arg.substring(2, arg.length);
  }
}

module.exports = {
  trimCommand,
  trimArg
}
