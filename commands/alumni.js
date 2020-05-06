module.exports = {
    name: 'alumni',
    description: 'Give user alumni role',
    
    execute(message, args) {
        const targID = '706881612683673682';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role Alumni from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role Alumni`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role Alumni to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role Alumni`);
        }
    },
};