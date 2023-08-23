const { COOLDOWN } = require("../../JSON/config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  cooldown: COOLDOWN,
  aliases: [],
  execute(client, message, args) {
    let Embed = new MessageEmbed()
      .setColor("DARK_BLUE")
      .setTitle("ping bot")
      .setDescription(`${client.ws.ping}`)
      .setTimestamp()
      .setFooter(
        `${message.author.username}`,
        message.author.avatarURL({ dynamic: true })
      );
    message.reply({ embeds: [Embed] });
  },
};
