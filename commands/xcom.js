module.exports = {
    name: 'xcom',
    description: 'Check how many days until XCOM: Chimera Squad releases',

    execute(message, args) {
        var gameDate = new Date("04/24/2020");
        var today = new Date();

        var difTime = gameDate.getTime() - today.getTime();
        var difDays = Math.floor(difTime / (1000 * 3600 * 24));

        message.channel.send(`There are ${difDays} days until XCOM: Chimera Squad`);
    }
}