const trimCommand = (command) => {
  if (!/^--\w+$/.test(command)) {
    return new Error('Command is does not conform to regex.');
  } else {
    return command.substring(2, command.length);
  }
}

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
