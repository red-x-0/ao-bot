const { COOLDOWN } = require('../../JSON/config.json');
const { MessageEmbed } = require('discord.js');
const { banner } = require('../../JSON/config.json');


module.exports = {
    name: 'ban',
    cooldown: COOLDOWN,
    usage: ``,
    aliases: [``],
    execute(client, message, args ) {
        if (!message.member.permissions.has("ADMINISTRATOR"))return message.reply('ليس لديك صلاحية ل استخدام الامر');
        const channel = client.channels.cache.get("980849417877860403");
        let target = message.mentions.users.first();
        if(!target) return message.delete(), message.reply(`mention user <@${message.author.id}>`);
        let member = message.guild.members.cache.get(target.id);
        let reason = args[2]
        if(!reason) return message.delete(), message.reply(`**what's the reason <@${message.author.id}>**`);

        let info = new MessageEmbed()
            .setColor('')
            .setFields(
                { name: 'username:', value: member.user.username },
                { name: 'ID:', value: member.user.id },  
                { name: 'Mention:', value: `<@${member.user.id}>` },{ name: 'Tag:', value: `#${member.user.discriminator}` },
                { name: 'Joined at:', value: `${member.joinedAt.toLocaleString()}` },
                { name: 'ban by:', value: `<@${message.author.id}>` },
                { name:`reason:`, value:`${reason}`, inline: true }
            )
            
            .setThumbnail(member.user.avatarURL({ dynamic: true }))
            .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL({ dynamic: true }) })
            .setFooter({ text: `Requested by: @${message.author.username}`, iconURL: message.author.avatarURL({ dynamic: true }) })
            .setTimestamp()
            .setImage(`${banner}`)

            
        channel.send({ embeds: [info] });
        setTimeout(() => {
            message.reply(`<@${member.user.id}> baned
            by <@${message.author.id}>`)
            member.ban({})
        }, 2000);
        
    },
}