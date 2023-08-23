const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
module.exports = {
    name: "banner",
    async execute(client, message, args) {
    let user = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(' ')[1]) || message.member;

    let banner = false;
    await user.user.fetch().then(user => {
      if (user.banner) {
        banner = user.bannerURL({ dynamic: true, size: 1024 })
      }
    })
    if (banner === false) return message.reply(`** This user \`${user.user.username}\` don't have banner !**`);

    const embed = new MessageEmbed()
      .setColor(message.guild.me.displayColor)
      .setTitle(`${user.user.username}'s Banner`)
      .setURL(`${banner}`)
      .setImage(`${banner}`)
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()

    const row = new MessageActionRow()
      .addComponents(new MessageButton()
        .setLabel('banner Link')
        .setStyle('LINK')
        .setURL(`${user.user.bannerURL({ dynamic: true, size: 1024 })}`)
      )

    message.reply({ embeds: [embed], components: [row] })

    }
}