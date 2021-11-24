module.exports = {
    name: 'switch',
    description: 'Give user Switch Gamer role',
    
    execute(message, args) {
        const targID = '913049831575011369';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role Switch Gamer from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role Switch Gamer`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role Switch Gamer to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role Switch Gamer`);
        }
    },
};