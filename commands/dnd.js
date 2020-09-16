module.exports = {
    name: 'dnd',
    description: 'Give user DND Player role',
    
    execute(message, args) {
        const targID = '734073847946412043';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role DND Player from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role DND Player`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role DND Player to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role DND Player`);
        }
    },
};