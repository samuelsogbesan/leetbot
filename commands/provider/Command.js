/**
 * Wrapper for commands.
 */
class Command {
  constructor(command) {
    this.command = Object.freeze(command);
  }

  run = (args) => {
    try {
      this.command(args);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = Command;
