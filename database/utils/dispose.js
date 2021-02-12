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
