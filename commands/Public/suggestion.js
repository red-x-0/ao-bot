
const { COOLDOWN } = require('../../JSON/config.json');
const { MessageEmbed } = require('discord.js');
const { banner } = require('../../JSON/config.json');
const { channel } = require('../../JSON/config.json');
    module.exports = {
    name: 'suggestion',
    cooldown: COOLDOWN,
    usage: ``,
    aliases: ['sug'],
    execute(client, message, args) {

        if(message.channel.id !== channel) return message.delete(), message.reply(`this command use only in <#!${channel}>`);

        let userSuggest =  args.join(" ")
        const Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`suggestion`)
        .setDescription(`${userSuggest}`)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        .setFooter({ text: `Requested by: @${message.author.username}`, iconURL: message.author.avatarURL({ dynamic: true }) })
        .setTimestamp()


        message.channel.send({ embeds: [Embed] })
        message.channel.send("https://cdn.discordapp.com/attachments/949614269824106610/1142889856092082206/standard.gif")
        message.delete()

    }
}