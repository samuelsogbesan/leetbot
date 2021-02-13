/**
 * Entry point to the parsing mechanism.
 * @param {*} text - the input text to be parsed for a command.
 * Expects text to be in the form '-commandName --arg1...argn, -commandName2 ...'
 * @returns the resulting command(s) as an array of objects,
 * mapping from { commandName: { arg1: [val1], arg2: [val1, val2], } }.
 * An argument's value will be undefined if it is a flag.
 * @throws if the input text is malformed.
 */
const parse = (text) => {

}

module.exports = parse;
