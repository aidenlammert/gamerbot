module.exports = {
    name: 'paladins',
    description: 'Give user Paladins Player role',
    
    execute(message, args) {
        const targID = '696876982314729573';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role Paladins Player from ${targUser}`);
            message.member.roles.remove(targID);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role Paladins Player to ${targUser}`);
            message.member.roles.add(targID);
        }
    },
};