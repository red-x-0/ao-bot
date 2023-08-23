
const { COOLDOWN } = require('../../JSON/config.json');
const { MessageEmbed } = require('discord.js');
const { PREFIX } = require('../../JSON/config.json');
const discord = require('discord.js')
    module.exports = {
    name: 'say',
    cooldown: COOLDOWN,
    usage: ``,
    aliases: ['قول','SAY'],
    execute(client, message, args) {
        let msg = args.join(" ");
        if (!msg)return message.reply('Write somthing to say');

        const Embed = new MessageEmbed()
        .setTitle(msg)
        message.channel.send({ embeds: [Embed] })
        message.delete()

    }
}
