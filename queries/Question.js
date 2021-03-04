const { QuestionTable } = require('../database/firebase');
const randomInt = require('../utils/randint');
const DIFFICULTY = require('../constants/difficulty.js');

/**
 * Gets a random question of a particular difficulty.
 * @param {*} difficulty A value from the DIFFICULTY enum.
 * @throws if the input difficulty is malformed, or no question can be found.
 */
const getRandomQuestion = async (difficulty) => {
  if(!Object.values(DIFFICULTY).includes(difficulty)) throw new Error('difficulty is invalid.');

  /*
    Janky solution but in the database, the number of questions for each type are stored as numberOf[diffultyName]Questions.
    So basically we can inject the value of difficulty into the fieldName to get the target field.
  */
  const fieldName = `numberOf${difficulty}Questions`;
  const numberOfQuestions = await QuestionTable.doc('_stats')
    .get()
    .then(snapshot => snapshot.data())
    .then(data => data[fieldName])
    .catch(err => console.log(err));

  const randomNumber = randomInt(0, numberOfQuestions);

  const question = await QuestionTable.where('difficulty', '==', difficulty)
    .offset(randomNumber)
    .limit(1)
    .get()
    .then(querySnapshot => {
      if (querySnapshot.empty) {
        throw new Error(`No ${difficulty} Questions`);
      } else {
        return querySnapshot.docs[0].data();
      }
    })
    .catch(err => console.log(err));

  return question;
}

/**
 * Adds a question to the database.
 * @param question the question to add to the database.
 */
const addQuestion = (question) => {

}

module.exports = {
  getRandomQuestion,
  addQuestion
}
