module.exports = {
    name: 'help',
    description: 'list commands', 

    execute(message, args) {
        message.channel.send(`My commands are:\n
        -- General --
        !ping - test connectivity
        !help - list commands\n
        -- Game Release Check --
        !cyberpunk
        !xcom\n
        -- Game Role add/remove
        !overwatch
        !paladins
        !minecraft
        !valorant
        !turnip`);
    }
}