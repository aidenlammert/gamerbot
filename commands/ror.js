module.exports = {
    name: 'ror',
    description: 'Give user Risk of Rain Player role',
    
    execute(message, args) {
        const targID = '734074529902755948';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role Risk of Rain Player from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role Risk of Rain Player`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role Risk of Rain Player to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role Risk of Rain Player`);
        }
    },
};