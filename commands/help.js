module.exports = {
    name: 'help',
    description: 'list commands', 

    execute(message, args) {
        message.channel.send(`My commands are:\n
    -- General --
!help - list commands
!ping - test connectivity
!alumni - mark yourself as UMaine Alumni
!guest - mark yourself as an Honorary Black Bear\n
-- Game Release Check --
(none active currently)\n
-- Hardware Selectors --
!pc
!xbox
!ps
!switch\n
-- Game Role add/remove --
!overwatch
!paladins
!minecraft
!valorant
!turnip
!cod
!dnd
!ror
!amongus
!wow
!apex
!halo`);
    }
}