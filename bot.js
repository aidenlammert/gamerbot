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
    let newUserID = member.user.id;
    console.log(`New user ID: ${newUserID}`);
    const scrubRoleID = '671798002444402738';
    
    member.roles.add(scrubRoleID);

    console.log(`New user added: ${newUserName}`);

    try {
        //channel.send(`Welcome to the Black Bear Gamers, ${newUserName}!`);
        newUserID.send(`Thanks for joining the Black Bear Gamers! We're happy to have you here.\n
        If you aren't a UMaine student, please use the command !guest in the #bot-command-line channel. If you used to be a UMaine student, please use the command !alumni in the same place.\n
        If you want to get a ping when people are looking for a group, we've got a bunch of roles available. Enter !help here or in #bot-command-line to see your options. Entering a command a second time will remove the role.\n
        We aren't an official UMaine server, but please keep things reasonably safe for work.`);
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