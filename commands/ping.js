module.exports = {
    name: 'ping',
    description: 'Check if bot is alive',
    execute(message, args) {
        message.channel.send('Pong!');
    },
};