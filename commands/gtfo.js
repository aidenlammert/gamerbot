module.exports = {
    name: 'gtfo',
    description: 'Give user GTFO Player role',
    
    execute(message, args) {
        const targID = '750107760510894087';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role GTFO Player from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role GTFO Player`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role GTFO Player to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role GTFO Player`);
        }
    },
};