const Discord = require('discord.io');
const auth = require('./auth.json');
const gamerbot = new Discord.Client();

gamerbot.once('ready', () => {
    console.log('Bot is ready');
});

gamerbot.login(auth.token);

gamerbot.on('message', message => {
    if(message.content === '!ping') {
        message.channel.send('pong');
    }
});


