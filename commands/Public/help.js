const { MessageEmbed } = require('discord.js')
const { COOLDOWN, PREFIX } = require('../../JSON/config.json');


module.exports = {
  
    name: "help",
    cooldown: COOLDOWN,
    description: "To show all commands",
    usage: "[command]",
    aliases: ["commands", "help me", "pls help", "h","مساعدة"],
    execute(client, message, args) {
    

    let embed = new MessageEmbed()
        .setAuthor({name: `Commands of  ${client.user.username}`, iconURL: "https://lh3.googleusercontent.com/drive-viewer/AJc5JmR3UqdN8lF-ubDD9zZb8_ppR0lNP0MPKcEyUJlFm5tjxgr1XSEkZ_xvnreJVA-e3rpRPEfdYTU=w1918-h927"})
        .setColor("RANDOM")
        .addFields({name:`Avatar`, value:`Show user avater Usage: $avater [@user]`, inline: true})
        .addFields({name:`Server`, value:`Get Server Info Usage: $server `, inline: true})
        .addFields({name:`User`, value:`Get user info Usage: $user [@user]`, inline: true})
        .addFields({name:`Profile`, value:`Show user profile Usage: $ `, inline: true})
        .addFields({name:`Say`, value:`to say somthing with embed Usage: $say [somthing] `, inline: true})
        .addFields({name:`Game`, value:`to play game Usage: $game `, inline: true})
        .addFields({name:`Dice`, value:`to roll dice  Usage: $dice `, inline: true})
        .addFields({name:`help`, value:`to show help menu Usage: $help `, inline: true})
        .addFields({name:`ping`, value:`to show bot ping Usage: $ping `, inline: true})
        .setFooter({text: `Use ${PREFIX}help [command] Red X - RED X`, iconURL: "https://lh3.googleusercontent.com/drive-viewer/AJc5JmR3UqdN8lF-ubDD9zZb8_ppR0lNP0MPKcEyUJlFm5tjxgr1XSEkZ_xvnreJVA-e3rpRPEfdYTU=w1918-h927"})
        message.channel.send({ embeds: [embed] });

  }
}
