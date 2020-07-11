const Discord = require('discord.js');
const fs = require('fs')

const auth = require('./auth.json');
const config = require('./config.json');
const {prefix} = config.prefix;

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
    console.log(`Loading command ${command.name}`);
}

client.once('ready', () => {
    console.log('\n---Bananas is ready---\n');

    client.user.setActivity("for commands", { type: "WATCHING"});
});

// NEW MEMBER
client.on('guildMemberAdd', member => {
    const generalID = '430782897918574594';
    let channel = client.channels.cache.get(generalID);

    const cmdChannelID = '509116559176761344';
    let cmdChannel = client.channels.cache.get(cmdChannelID);

    const newUserName = member.user.username;
    const scrubRoleID = '671798002444402738';
    
    member.roles.add(scrubRoleID);

    console.log(`New user added: ${newUserName}`);

    try {
        channel.send(`Welcome to the Black Bear Gamers server, ${newUserName}! Check !help in ${cmdChannel} to see what roles you can assign yourself.`);
    } catch(error) {
        console.log(`New user greeting broke again...`);
        console.error(error);
    }
    

});

// NEW MESSAGE
client.on('message', message => {
    // message isn't a command OR message is sent by a bot
    if(!message.content.startsWith("!") || message.author.bot) return;

    // 1/100 chance to react with sigmaFeet
    if(Math.floor(Math.random() * 100) === 1) {
        message.react('671809594745421840');
    }

    // args = everything after prefix
    // command = lowercased args
    const args = message.content.slice(1).split(/ +/);
    const command = args.shift().toLowerCase();
    //console.log(`entered command ${command}`);

    // entered command is not in commands folder
    if(!client.commands.has(command)) {
        message.reply(`The command !${command} doesn't exist`);
        return;
    } 

    try {
        client.commands.get(command).execute(message, args);
    } catch(error) {
        console.error(error);
        message.reply('there was an issue running that command, tell Aiden to check the console');
    }

});

client.login(auth.token);