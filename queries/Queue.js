const dispose = require('../database/utils/dispose.js');
const { QueueTable } = require('../database/firebase.js');

/**
 * Gets latest Player from queue.
 */
const pollPlayer = async (serverId) => pollPlayers(serverId, 1);

/**
 * Get latest numberOfPlayers players from queue.
 * @param {*} numberOfPlayers 
 * @throws if there aren't that many players in the queue,
 */
const pollPlayers = async (serverId, numberOfPlayers) =>
  QueueTable.child(serverId)
    .orderByValue()
    .limitToLast(numberOfPlayers)
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.val();
      Object.keys(data).forEach(user => dispose(querySnapshot.ref.child(user)));

      return data;
    })
    .catch(err => console.log(err));

/**
 * Adds the given user to the queue.
 * @param {*} user 
 * @throws if the player is already in the queue or the operation otherwise fails.
 */
const offerPlayerToQueue = async (serverId, user) =>
  QueueTable
    .child(serverId)
    .child(user)
    .set(+ new Date())
    .catch(err => console.log(err));

/**
 * Removes a specific user out of the queue, based on the userid.
 * @param {*} serverId 
 * @param {*} user 
 */
const removePlayerFromQueue = async (serverId, user) => await dispose(QueueTable.child(serverId).child(user));

/**
 * Returns the number of players in the queue
 */
const getQueueSize = (serverId) => {

}
