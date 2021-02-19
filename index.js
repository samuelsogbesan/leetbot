const Discord = require('discord.js');
require('dotenv').config();
const { parse } = require('./commands/parser.js');
const { executer } = require('./commands/executer.js');

const BOT_TOKEN = process.env.BOT_TOKEN;

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  // Ignore messages from bots. Stops recursive loops and miscalls.
  if (msg.author.bot) return;

  let command;
  try {
    command = parse(msg.content);
  } catch (err) {
    throw err;
  }

  let response;
  try {
    response = executer(command);
    msg.channel.send(response);
  } catch(err) {
    throw err;
  }
});

client.on('voiceStateUpdate', (oldChannel, newChannel) => {
  /**
   * The ID of the channel being used as the queue.
   */
  const queueID = 807286526408130590;

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
