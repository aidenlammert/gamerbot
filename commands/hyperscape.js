module.exports = {
    name: 'hyperscape',
    description: 'Give user Hyper Scape Contender role',
    
    execute(message, args) {
        const targID = '747100591095808090';
        const targUser = message.member.user.username;
        
        // remove role if member already has it
        if(message.member.roles.cache.has(targID)) {
            console.log(`Removing role Hyper Scape Contender from ${targUser}`);
            message.member.roles.remove(targID);

            message.reply(`removed role Hyper Scape Contender`);
        }
        // add role if member doesn't have it already
        else {
            console.log(`Adding role Hyper Scape Contender to ${targUser}`);
            message.member.roles.add(targID);

            message.reply(`added role Hyper Scape Contender`);
        }
    },
};