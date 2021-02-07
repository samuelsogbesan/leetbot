/**
 * Returns whether an interview channel is current being used for interview.
 * @param {*} channelID 
 */
const isInterviewInSession = (channelId) => {

}

/**
 * Starts an interview session in the channel with channelId between user1 and user2.
 * @param {*} channelId 
 * @param {*} user1 
 * @param {*} user2 
 * @throws if the given channel is not an interview channel.
 */
const startInterviewSession = (channelId, user1, user2) => {

}

/**
 * Start an interview session in any free interview channel.
 * @param {*} serverId the id of the server to query.
 * @param {*} user1
 * @param {*} user2
 * @throws if there are no free interview channels.
 */
const startInterviewSessionAnywhere = (serverId, user1, user2) => {

}

/**
 * If occupied, this ends an interview in channel with channelId.
 * @param {*} channelId 
 */
const endInterviewSession = (channelId) => {

}

/**
 * If occupied, returns the session data for a given interview channel.
 * If no interview is in progress, returns undefined.
 * @param {*} channelId 
 */
const getSession = (channelId) => {

}
