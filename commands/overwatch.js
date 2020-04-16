module.exports = {
    name: 'overwatch',
    description: 'Give user Overwatch Player role',
    
    execute(message, args) {
        const targID = '696876323049701497';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role Overwatch Player from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role Overwatch Player`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role Overwatch Player to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role Overwatch Player`);
        }
    },
};