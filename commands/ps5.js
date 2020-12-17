module.exports = {
    name: 'gpu',
    description: 'Give user PS5 Hunter role',
    
    execute(message, args) {
        const targID = '789168474010157116';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role PS5 Hunter from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role PS5 Hunter`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role PS5 Hunter to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role PS5 Hunter`);
        }
    },
};