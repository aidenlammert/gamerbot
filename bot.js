const Discord = require('discord.io');
const auth = require('./auth.json');
const gamerbot = new Discord.Client();

gamerbot.once('ready', () => {
    console.log('Bot is ready');
});

client.login(auth.token);

client.on('message', message => {
    if(message.content === '!ping') {
        message.channel.send('pong');
    }
});


