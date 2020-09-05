module.exports = {
    name: 'amongus',
    description: 'Give user Among Us Player role',
    
    execute(message, args) {
        const targID = '751768204497387530';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role Among Us Player from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role Among Us Player`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role Among Us Player to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role Among Us Player`);
        }
    },
};