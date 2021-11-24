module.exports = {
    name: 'ps',
    description: 'Give user PlayStation Gamer role',
    
    execute(message, args) {
        const targID = '789168474010157116';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role PlayStation Gamer from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role PlayStation Gamer`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role PlayStation Gamer to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role PlayStation Gamer`);
        }
    },
};