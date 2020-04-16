module.exports = {
    name: 'help',
    description: 'list commands', 

    execute(message, args) {
        message.channel.send(`My commands are:\n
        !ping - test connectivity\n
        !help - list commands\n
        !overwatch - add/remove Overwatch Player role\n
        !paladins - add/remove Paladins Player role\n
        !minecraft - add/remove Minecraft Player role\n
        !valorant - add/remove Valorant Player role`);
    }
}