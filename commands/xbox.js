module.exports = {
    name: 'xbox',
    description: 'Give user Xbox Gamer role',
    
    execute(message, args) {
        const targID = '913049694010245150';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role Xbox Gamer from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role Xbox Gamer`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role Xbox Gamer to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role Xbox Gamer`);
        }
    },
};