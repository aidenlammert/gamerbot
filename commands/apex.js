module.exports = {
    name: 'apex',
    description: 'Give user Apex Legend role',
    
    execute(message, args) {
        const targID = '840561388543934495';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role Apex Legend from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role Apex Legend`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role Apex Legend to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role Apex Legend`);
        }
    },
};