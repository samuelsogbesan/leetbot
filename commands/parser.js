/**
 * Consumes a command string and returns it, split up into the command and its arguments.
 * @param {*} text - the input text to be parsed for a command.
 * Expects text to be in the form '-commandName --arg1...argn, -commandName2 ...'
 * @returns the resulting command(s) as an array of objects,
 * mapping from { commandName: { arg1: [val1], arg2: [val1, val2], } }.
 * An argument's value will be null if it is a flag.
 * @throws if the input text is malformed.
 */
const parse = (text) => {
  //const commandExpr = /^(-[a-zA-Z]+[\w]*[^\s])+(\s-{2}[a-zA-z]+[\w]*(\s\w+)*)*$/;
  //^(-[a-zA-Z]+[\w]*[^\s])+((\s-{2}[a-zA-z]+[\w]*(?>\s\w+[^\s-])*)*)$
  /**
   * The regular expression for a command of the form --command --arg1 optionalva1 optionval2...
   */
  const commandExpr = /^(-\w+){1}(\s--\w+(\s\w+)*)*$/;

  if(commandExpr.test(text)) {
    const command = /^(-\w+)/g.exec(text)[0];
    const rawArgs = text.match(/(\s--\w+(\s\w+)*)/g);
    var args = {};

    // Generate arguement pairs from raw arguements.
    if (rawArgs) {
      rawArgs.forEach(arg => {
        var values = /\s\w+/g.exec(arg);
        if (values) {
          // Grab all the values as an array.
          values = arg.match(/\s\w+/g);

          // Do some post processing on the values to remove lingering spaces
          for (var i = 0; i < values.length; i++) values[i] = values[i].trim();
        }

        const argName = /--\w+[^\s]/g.exec(arg)[0];
        args[argName] = values;
      });
    }

    return {
      command: command.substr(1),
      args: args
    }
  } else {
    return new Error('Can\'t parse input');
  }
}

module.exports = { parse };
