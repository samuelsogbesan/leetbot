const credentials = require('./credentials.json');
const firebase = require('firebase-admin');

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL: 'https://project-a-ac3d7-default-rtdb.europe-west1.firebasedatabase.app'
});

const database = firebase.database();
const firestore = firebase.firestore();

module.exports = {
  QuestionTable: firestore.collection('/questions'),
  ServerTable: database.ref('/servers'),
  QueueTable: database.ref('/queues'),
  ChannelTable: database.ref('/channels'),
  SessionTable: database.ref('/sessions')
};
