module.exports = {
    name: 'cod',
    description: 'Give user COD Player role',
    
    execute(message, args) {
        const targID = '710559407934799892';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role COD Player from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role COD Player`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role COD Player to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role COD Player`);
        }
    },
};