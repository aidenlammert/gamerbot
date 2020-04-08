const Discord = require('discord.io');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot ready');
});

client.login('auth.json');