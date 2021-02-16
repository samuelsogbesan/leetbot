const bot = require('./bot');
require('dotenv').config();

const BOT_TOKEN = process.env.BOT_TOKEN;

bot.login(BOT_TOKEN);
