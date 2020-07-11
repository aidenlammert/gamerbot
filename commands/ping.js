module.exports = {
    name: 'ping',
    description: 'Check if bot is alive',
    
    execute(message, args) {
        console.log('pinging')
        message.channel.send('Pong!');
    },
};