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
    console.log(`storing command ${command.name}`);
}

client.once('ready', () => {
    console.log('\n---Bananas is ready---\n');
});

// Enter function when message is sent
client.on('message', message => {
    // message isn't a command
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    // args = everything after prefix
    // command = lowercased args
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    console.log(`entered command ${command}`);

    if(!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch(error) {
        console.error(error);
        message.reply('Invalid command');
    }

});

client.login(auth.token);