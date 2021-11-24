module.exports = {
    name: 'pc',
    description: 'Give user PC Gamer role',
    
    execute(message, args) {
        const targID = '913049505363017799';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role PC Gamer from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role PC Gamer`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role PC Gamer to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role PC Gamer`);
        }
    },
};