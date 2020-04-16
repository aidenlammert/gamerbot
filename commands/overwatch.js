module.exports = {
    name: 'overwatch',
    description: 'Give user Overwatch Player role',
    execute(message, args) {
        // remove role if member already has it
        if(message.member.roles.some(role => role.name === 'Overwatch Player')) {
            message.member.removeRole("Overwatch Player").catch(console.error);
        }
        // add role if member doesn't have it already
        else {
            message.member.addRole("Overwatch Player").catch(console.error);
        }
    },
};