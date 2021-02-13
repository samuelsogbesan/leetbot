/**
 * Entry point to the parsing mechanism.
 * @param {*} text - the input text to be parsed for a command.
 * Expects text to be in the form '-commandName --arg1...argn, -commandName2 ...'
 * @returns the resulting command(s) as an array of objects,
 * mapping from { commandName : [arguments] }.
 * @throws if the input text is malformed.
 */
const parse = (text) => {

}

module.exports = parse;
