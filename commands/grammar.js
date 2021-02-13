/**
 * A series of regular expressions denoting the valid set of tokens.
 */
const grammar = [
  '-[a-zA-z]+[a-zA-z0-9]*',
  '--[a-zA-z]+.+[a-zA-z0-9]*',
  '\S(?<!-)\S*'
];

module.exports = grammar;
