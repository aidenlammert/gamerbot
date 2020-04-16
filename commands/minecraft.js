module.exports = {
    name: 'minecraft',
    description: 'Give user Minecraft Player role',
    
    execute(message, args) {
        const targID = '696877311261409310';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role Minecraft Player from ${targUser}`);
            message.member.roles.remove(targID);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role Minecraft Player to ${targUser}`);
            message.member.roles.add(targID);
        }
    },
};