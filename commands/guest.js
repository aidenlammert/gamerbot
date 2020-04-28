module.exports = {
    name: 'guest',
    description: 'Give user Honorary Black Bear role',
    
    execute(message, args) {
        const targID = '673883106993897472';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role Honorary Black Bear from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role Honorary Black Bear`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role Honorary Black Bear to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role Honorary Black Bear`);
        }
    },
};