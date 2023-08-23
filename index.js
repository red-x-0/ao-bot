const { Client, Intents, Collection } = require('discord.js');
const { TOKEN, dbURL, sugChannel, PREFIX } = require('./JSON/config.json');
const { MessageEmbed } = require('discord.js');
const client = new Client({intents: 131071});
const handlers = [
  'commands',
  'events',
  'slashcommands'
]
client.commands = new Collection();
client.events = new Collection();

handlers.forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

// mongoose
const mongoose = require("mongoose");

mongoose
  .connect(
    dbURL
  )
  .then((result) => {
    console.log('Connected to MongoDB');
  })

  .catch((err) => {
    console.log(err);
  });

  client.on("messageCreate", message => {
    const args = message.content.trim().split(/ +/);
    if(message.channel.id !== sugChannel || message.author.bot) return;

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

  })

client.login(TOKEN);