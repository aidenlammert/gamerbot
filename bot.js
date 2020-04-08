const Discord = require('discord.js');
const auth = require('./auth.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot is ready, logged in as ${client.user.tag}');
});

client.on('message', message => {
    if(message.content === '!ping') {
        message.channel.send('pong');
    }
});

client.login(auth.token);