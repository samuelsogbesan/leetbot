const { QueueTable } = require('../database/firebase.js');

/**
 * Gets latest Player from queue.
 */
const pollPlayer = (serverId) => {
  pollPlayers(serverId, 1);
}

/**
 * Get latest numberOfPlayers players from queue.
 * @param {*} numberOfPlayers 
 * @throws if there aren't that many players in the queue,
 */
const pollPlayers = async (serverId, numberOfPlayers) => {
  const res = await QueueTable.child(serverId)
    .limitToFirst(numberOfPlayers)
    .get()
    .then(res => res.val())
    .catch(err => console.log(err));

  return res;
}

/**
 * Adds the given user to the queue.
 * @param {*} user 
 * @throws if the player is already in the queue or the operation otherwise fails.
 */
const offerPlayerToQueue = (serverId, user) => {

}

/**
 * Removes a specific user out of the queue, based on the userid.
 * @param {*} serverId 
 * @param {*} user 
 */
const removePlayerFromQueue = (serverId, user) => {

}

/**
 * Returns the number of players in the queue
 */
const getQueueSize = (serverId) => {

}
