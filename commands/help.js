module.exports = {
    name: 'help',
    description: 'list commands', 

    execute(message, args) {
        message.channel.send(`My commands are:\n
        -- General --
        !help - list commands
        !ping - test connectivity
        !guest - mark yourself as an Honorary Black Bear\n
        -- Game Release Check --
        !cyberpunk - Cyberpunk 2077
        !lou - Last of Us 2\n
        -- Game Role add/remove --
        !overwatch
        !paladins
        !minecraft
        !valorant
        !turnip`);
    }
}