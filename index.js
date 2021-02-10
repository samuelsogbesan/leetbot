const Discord = require('discord.js');
require('dotenv').config();

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

client.on('voiceStateUpdate', (oldChannel, newChannel) => {
  /**
   * The ID of the channel being used as the queue.
   */
  const queueID = 807286526408130590;

  if (oldChannel.channelID == queueID) {
    // User left the queue channel.
    const serverId = oldChannel.member.guild.id;
    const {id, username} = oldChannel.member.user;

    removePlayerFromQueue(serverId, id);
    console.log(`user ${username} (${id}) left queue.`);
  } else if (newChannel.channelID == queueID) {
    // User joined the queue channel.
    const serverId = newChannel.member.guild.id;
    const {id, username} = newChannel.member.user;

    offerPlayerToQueue(serverId, id);
    console.log(`user ${username} (${id}) joined queue.`);
  }
})

client.login(BOT_TOKEN);
