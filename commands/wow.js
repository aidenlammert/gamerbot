module.exports = {
    name: 'wow',
    description: 'Give user WoW Player role',
    
    execute(message, args) {
        const targID = '752148902156828715';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role WoW Player from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role WoW Player`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role WoW Player to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role WoW Player`);
        }
    },
};