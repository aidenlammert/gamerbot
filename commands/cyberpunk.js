module.exports = {
    name: 'cyberpunk',
    description: 'Check how many days until Cyberpunk 2077 releases',

    execute(message, args) {
        var cyberpunk = new Date("09/17/2020");
        var today = new Date();

        var dif = cyberpunk.getTime() - today.getTime();

        message.channel.send(`there are ${dif} days until Cyberpunk 2077`);
    }
}