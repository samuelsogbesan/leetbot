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

/**
 * Handles Queue Mechanism. Watches Channels in 'Queue' Category and dynamically previsions 'Interview' Channels as the queue grows.
 * TODO: Add Queue Pause / Play functionality using roles. If the bots role is set to queue-pause, the bot should pause. If the bots role is set to queue-play, the bot should play.
 */
client.on('voiceStateUpdate', async (oldVoiceState, newVoiceState) => {
  const CATEGORIES = {
    INTERVIEW_CATEGORY: 'Interviews',
    QUEUE_CATEGORY: 'Queue'
  }

  const interviewChannelLimit = 5;

  const server = newVoiceState.channel ? newVoiceState.channel.guild : oldVoiceState.channel.guild;

  const interviewCategory = server.channels.cache.find(channel => channel.type === 'category' && channel.name === CATEGORIES.INTERVIEW_CATEGORY);

  // Check if a player is joining a channel.
  if (newVoiceState.channel) {
    const category = newVoiceState.channel.parent;

    // Check if they joined a queue and if there are enough players to intiate the pop.
    if (category.name === CATEGORIES.QUEUE_CATEGORY && newVoiceState.channel.members.size > 0) {
      // Pop two players off the queue.
      const poppedPlayers = newVoiceState.channel.members.sorted((userA, userB) => userA.createdTimestamp - userB.createdTimestamp).first(2);

      // Get all the free interview channels from this server.
      const freeInterviewChannels = server.channels.cache.filter(channel => channel.type === 'voice'
        && channel.parent.name === CATEGORIES.INTERVIEW_CATEGORY
        && channel.members.size === 0 ? true
        : false
      );

      // Find or create a free work room for them to hang out in.
      let targetRoom;
      if (freeInterviewChannels.size > 0) {
        targetRoom = freeInterviewChannels.array()[0];
      } else if (interviewCategory.members.size < interviewChannelLimit) {
        targetRoom = await server.channels.create(`Work Room ${interviewCategory.children.size+1}`, {type: 'voice', parent: interviewCategory, userLimit: 2});
      }

      // Migrate players to that work room.
      poppedPlayers.forEach(player => {
        if (!player.user.bot) player.voice.setChannel(targetRoom).catch(err => console.log(err));
      });
    }
  }
  // Check if a player is leaving a channel.
  else if (oldVoiceState.channel) {
    const category = oldVoiceState.channel.parent;

    // If all the people leave the interview channel, remove it
    if (category.name === CATEGORIES.INTERVIEW_CATEGORY && oldVoiceState.channel.members.size === 0) {
      oldVoiceState.channel.delete();
    }
  }
});

client.login(BOT_TOKEN);
