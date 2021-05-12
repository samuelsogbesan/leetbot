class InvalidCommandError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidCommandError';
  }
}

module.exports = InvalidCommandError;
