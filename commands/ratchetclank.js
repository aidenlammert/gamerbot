module.exports = {
    name: 'ratchetclank',
    description: 'Check how many days until Ratchet & Clank releases',

    execute(message, args) {
        var gameDate = new Date("06/11/2021");
        var today = new Date();

        var difTime = gameDate.getTime() - today.getTime();
        var difDays = Math.ceil(difTime / (1000 * 3600 * 24));

        if(difDays > 1) {
            message.channel.send(`There are ${difDays} days until Ratchet & Clank`);
        }
        else if(difDays === 1) {
            message.channel.send(`Ratchet & Clank is released tomorrow.`);
        }
        else if(difDays === 0) {
            message.channel.send(`Ratchet & Clank released today.`);
        }
        else if(difDays < 0) {
            message.channel.send(`Ratchet & Clank is already released. Tell Aiden to delete this command.`);
        }
    }
} 