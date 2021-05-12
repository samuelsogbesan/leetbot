const { bot } = require("./bot");

const BOT_TOKEN = process.env.BOT_TOKEN;
bot.login(BOT_TOKEN);
