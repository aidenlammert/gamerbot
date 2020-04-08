const Discord = require('discord.io');
const auth = require('./auth.json');
const client = new Discord.Client();

gamerbot.once('ready', () => {
    console.log('Bot is ready, logged in as ${client.user.tag}');
});

gamerbot.on('message', message => {
    if(message.content === '!ping') {
        message.channel.send('pong');
    }
});

client.login('Njk3MjE3NzcyODQ5MjAxMjcz.Xo0Npg.jmT9gWBh1ifZqVdXo-wOMBhmANk')