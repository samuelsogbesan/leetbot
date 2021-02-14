const Discord = require('discord.js');
require('dotenv').config();
const helpers = require('./utils/helperFunctions');

const BOT_TOKEN = process.env.BOT_TOKEN;

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  let parsedObj = helpers.parseMessage(msg);
  console.log(parsedObj);
});

client.on('voiceStateUpdate', (oldChannel, newChannel) => {
  /**
   * The ID of the channel being used as the queue.
   */
  const queueID = 754719214430060636;

  if (oldChannel.channelID == queueID) {
    // they left channel
    const {id, username} = oldChannel.member.user;
    console.log(`user ${username} (${id}) left queue.`);
  } else if (newChannel.channelID == queueID) {
    // they joined channel
    const {id, username} = newChannel.member.user;
    console.log(`user ${username} (${id}) joined queue.`);
  }
})

client.login(BOT_TOKEN);
