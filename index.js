const Discord = require('discord.js');
const { offerPlayerToQueue, removePlayerFromQueue } = require('./queries/Queue.js');
require('dotenv').config();
const { isQueueChannel } = require('./queries/Channel');
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
    console.error(err);
  }

  let response;
  try {
    response = executer(command);
    msg.channel.send(response);
  } catch(err) {
    console.error(err);
  }
});

client.on('voiceStateUpdate', (oldVoiceState, newVoiceState) => {
  if (oldVoiceState.channel !== null && isQueueChannel(oldVoiceState.guild.id, oldVoiceState.channel.id)) {
    // User left the queue channel.
    const serverId = oldChannel.member.guild.id;
    const {id, username} = oldChannel.member.user;

    try {
      removePlayerFromQueue(serverId, id);
      console.log(`user ${username} (${id}) left queue.`);
    } catch (err) {
      console.log(err);
    }
  }
  if (newVoiceState.channel !== null && isQueueChannel(newVoiceState.guild.id, newVoiceState.channel.id)) {
    // User joined the queue channel.
    const serverId = newChannel.member.guild.id;
    const {id, username} = newChannel.member.user;

    try {
      offerPlayerToQueue(serverId, id);
      console.log(`user ${username} (${id}) joined queue.`);
    } catch (err) {
      console.log(err);
    }
  }
});

client.login(BOT_TOKEN);
