const Discord = require('discord.js');
require('dotenv').config();
const { isQueueChannel } = require('./queries/Channel');

const BOT_TOKEN = process.env.BOT_TOKEN;

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('pong');
  }
});

client.on('voiceStateUpdate', (oldVoiceState, newVoiceState) => {
  if (oldVoiceState.channel !== null && isQueueChannel(oldVoiceState.guild.id, oldVoiceState.channel.id)) {
    // they left channel
    const {id, username} = oldVoiceState.member.user;
    console.log(`user ${username} (${id}) left queue.`);
  }

  if (newVoiceState.channel !== null && isQueueChannel(newVoiceState.guild.id, newVoiceState.channel.id)) {
    // they joined channel
    const {id, username} = newVoiceState.member.user;
    console.log(`user ${username} (${id}) joined queue.`);
  }
});

client.login(BOT_TOKEN);
