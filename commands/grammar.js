/**
 * A series of regular expressions denoting the valid set of symbols.
 * The symbols are ordered in order of precedence. Earlier ranked symbols
 * are matched first.
 */
const grammar = [
  '-[a-zA-z]+[a-zA-z0-9]*',
  '--[a-zA-z]+.+[a-zA-z0-9]*',
  '\S(?<!-)\S*'
];

module.exports = grammar;
