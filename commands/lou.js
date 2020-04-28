module.exports = {
    name: 'lou',
    description: 'Check how many days until Last of Us 2 releases',

    execute(message, args) {
        var gameDate = new Date("05/29/2020");
        var today = new Date();

        var difTime = gameDate.getTime() - today.getTime();
        var difDays = Math.ceil(difTime / (1000 * 3600 * 24));

        if(difDays > 1) {
            message.channel.send(`There are ${difDays} days until Last of Us 2`);
        }
        else if(difDays === 1) {
            message.channel.send(`Last of Us 2 is released tomorrow.`);
        }
        else if(difDays === 0) {
            message.channel.send(`Last of Us 2 released today.`);
        }
        else if(difDays < 0) {
            message.channel.send(`Last of Us 2 is already released. Tell Aiden to delete this command.`);
        }
    }
}