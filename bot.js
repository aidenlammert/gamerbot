var Discord = require('discord.io');
var auth = require('./auth.json');

// Initialize bot
var bot = new Discord.client({
    token : auth.token,
    autorun : true
});

bot.on('message', function(user, userID, channelID, message, evt){
    if(message.substring(0,1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);

        switch(cmd) {
            case 'roles':
                channelID.send('The available roles are:\n' +
                    'Scrubs: !scrub\n' +
                    'God-tier Gamers: !gamer\n' +
                    'Overwatch Player: !overwatch\n' +
                    'Paladins Player: !paladins\n' +
                    'Minecraft Player: !minecraft\n' +
                    'CoD Warzone Player: !warzone')
        }
    }
})

