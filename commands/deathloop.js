module.exports = {
    name: 'deathloop',
    description: 'Check how many days until Deathloop releases',

    execute(message, args) {
        var gameDate = new Date("09/14/2021");
        var today = new Date();

        var difTime = gameDate.getTime() - today.getTime();
        var difDays = Math.ceil(difTime / (1000 * 3600 * 24));

        if(difDays > 1) {
            message.channel.send(`There are ${difDays} days until Deathloop`);
        }
        else if(difDays === 1) {
            message.channel.send(`Deathloop is released tomorrow.`);
        }
        else if(difDays === 0) {
            message.channel.send(`Deathloop released today.`);
        }
        else if(difDays < 0) {
            message.channel.send(`Deathloop is already released. Tell Aiden to delete this command.`);
        }
    }
} 