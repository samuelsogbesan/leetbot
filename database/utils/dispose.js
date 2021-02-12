/**
 * Safely deletes a Firebase database Reference after use.
 * Useful for deleting data when it is no longer needed.
 * @param {*} Reference a firebase reference.
 * @throws if there is an error removing the Reference.
 */
const dispose = async (Reference) => {
  try {
    await Reference.remove();
  } catch (err) {
    console.log(err);
    return false;
  }

  return true;
}

module.exports = dispose;
