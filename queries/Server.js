/**
 * Returns a single free room. No particular priority.
 * @param {*} serverId 
 */
const getAnyFreeRoom = (serverId) => {

}

/**
 * Returns an array of free interview channels for the given server.
 * @param {*} serverId 
 */
const getAllFreeRooms = (serverId) => {

}

/**
 * Returns an array of all the interview rooms in the server.
 * @param {*} serverId 
 */
const getAllRooms = (serverId) => {

}

/**
 * Mark the given room as seen.
 * @param {*} serverId 
 * @param {*} channelId 
 */
const useRoom = (serverId, channelId) => {

}

/**
 * Marks the given room as unoccupied.
 * @param {*} serverId 
 * @param {*} channelId 
 */
const clearRoom = (serverId, channelId) => {

}

module.exports = {
  getAnyFreeRoom,
  getAllFreeRooms,
  getAllRooms,
  useRoom,
  clearRoom
};
