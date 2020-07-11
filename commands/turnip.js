module.exports = {
    name: 'turnip',
    description: 'Give user Turnip Trader role',
    
    execute(message, args) {
        const targID = '700740061330669638';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role Turnip Trader from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role Turnip Trader`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role Turnip Trader to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role Turnip Trader`);
        }
    },
};