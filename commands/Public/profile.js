const { MessageEmbed } = require("discord.js");
const { COOLDOWN } = require('../../JSON/config.json');
const { banner } = require('../../JSON/config.json');
const { Message } = require('discord.js');
const user = require('../Public/user');


module.exports = {
    name: "profile",
    cooldown: COOLDOWN,
    usage: ``,
    aliases: ['بروفايل','PROFILE'],
    execute(client, message, args) {
        let target = message.mentions.users.first() || message.author;
        let member = message.guild.members.cache.get(target.id);
        const Embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("profile")
        .setImage(`https://api.probot.io/profile/${member.id}`)
        .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: `${message.author.avatarURL({ dynamic: true })}` })
        message.channel.send({ embeds: [Embed] })
        message.delete()
    
    }

}