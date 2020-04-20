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
});

// Enter function when new member joins
client.on('guildMemberAdd', member => {
    const generalID = '430782897918574594';
    const newUser = member.user.username;
    const scrubRoleID = '671798002444402738';

    member.roles.add(scrubRoleID);
});

// Enter function when message is sent
client.on('message', message => {
    // message isn't a command OR message is sent by a bot
    if(!message.content.startsWith("!") || message.author.bot) return;

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