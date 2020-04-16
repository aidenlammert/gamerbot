module.exports = {
    name: 'cyberpunk',
    description: 'Check how many days until Cyberpunk 2077 releases',

    execute(message, args) {
        var cyberpunk = new Date("09/17/2020");
        var today = new Date();

        var difTime = cyberpunk.getTime() - today.getTime();
        var difDays = floor(difTime / (1000 * 3600 * 24));

        message.channel.send(`there are ${difDays} days until Cyberpunk 2077`);
    }
}