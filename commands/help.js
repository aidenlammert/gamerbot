module.exports = {
    name: 'help',
    description: 'list commands', 

    execute(message, args) {
        message.channel.send(`My commands are:\n
        -- General --
        !help - list commands
        !ping - test connectivity
        !guest - mark yourself as an Honorary Black Bear
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