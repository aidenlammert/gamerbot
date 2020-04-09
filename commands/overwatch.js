module.exports = {
    name: 'overwatch',
    description: 'Give user Overwatch Player role',
    execute(message, args) {
        let role = message.guild.roles.find(role => role.name === 'Overwatch Player');

        // remove role if member already has it
        if(message.member.roles.has(role.id)) {
            member.removeRole(role).catch(console.error);
        }
        // add role if member doesn't have it already
        else {
            member.addRole(role).catch(console.error);
        }
    },
};