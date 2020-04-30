module.exports = {
    name: 'valorant',
    description: 'Give user Transformice Player role',
    
    execute(message, args) {
        const targID = '699812102600261722';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role Transformice Player from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role Transformice Player`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role Transformice Player to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role Transformice Player`);
        }
    },
};
