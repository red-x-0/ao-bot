const { COOLDOWN } = require('../../JSON/config.json');
const { MessageEmbed,MessageActionRow, MessageButton} = require("discord.js");

module.exports = {
    name: "avatar", 
    cooldown: COOLDOWN,
    aliases: ["av"], 
    async execute (client, message, args) {
        let member = message.mentions.users.first() || await client.users.fetch(args[0]).catch(() => {}) || message.author;            
        let Embed1 = new MessageEmbed()
        .setTitle(`${member.username}'s Avatar`)
            .setColor('RANDOM')
            .setDescription(``)
            .setImage(member.displayAvatarURL({ dynamic: true, size: 1024 }))

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("PNG")
                    .setURL(`${member.displayAvatarURL({ format: "png" })}`)
                    .setEmoji("")
                    .setStyle("LINK"),
                new MessageButton()
                    .setLabel("WEBP")
                    .setURL(`${member.displayAvatarURL({ format: "webp" })}`)
                    .setEmoji("")
                    .setStyle("LINK"),
                new MessageButton()
                    .setLabel("JPG")
                    .setURL(`${member.displayAvatarURL({ format: "jpg" })}`)
                    .setEmoji("")
                    .setStyle("LINK")
            )
            message.reply({ embeds: [Embed1], components: [row] });
  }
}