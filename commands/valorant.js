module.exports = {
    name: 'valorant',
    description: 'Give user Valorant Player role',
    
    execute(message, args) {
        const targID = '699812102600261722';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role Valorant Player from ${targUser}`);
            message.member.roles.remove(targID);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role Valorant Player to ${targUser}`);
            message.member.roles.add(targID);
        }
    },
};