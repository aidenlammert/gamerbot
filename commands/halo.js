module.exports = {
    name: 'halo',
    description: 'Give user Halo Player role',
    
    execute(message, args) {
        const targID = '911071442710433852';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role Halo Player from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role Halo Player`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role Halo Player to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role Halo Player`);
        }
    },
};