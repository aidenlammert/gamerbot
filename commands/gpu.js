module.exports = {
    name: 'gpu',
    description: 'Give user GPU Hunter role',
    
    execute(message, args) {
        const targID = '789168416682147841';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role GPU Hunter from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role GPU Hunter`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role GPU Hunter to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role GPU Hunter`);
        }
    },
};