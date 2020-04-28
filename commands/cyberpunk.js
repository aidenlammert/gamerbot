module.exports = {
    name: 'cyberpunk',
    description: 'Check how many days until Cyberpunk 2077 releases',

    execute(message, args) {
        var gameDate = new Date("09/17/2020");
        var today = new Date();

        var difTime = gameDate.getTime() - today.getTime();
        var difDays = Math.ceil(difTime / (1000 * 3600 * 24));

        if(difDays > 1) {
            message.channel.send(`There are ${difDays} days until Cyberpunk 2077`);
        }
        else if(difDays === 1) {
            message.channel.send(`Cyberpunk 2077 is released tomorrow.`);
        }
        else if(difDays === 0) {
            message.channel.send(`Cyberpunk 2077 released today.`);
        }
        else if(difDays < 0) {
            message.channel.send(`Cyberpunk 2077 is already released. Tell Aiden to delete this command.`);
        }
    }
}