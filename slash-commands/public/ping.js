const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
  async execute(interaction) {
    console.log("pong")
    await interaction.reply('Pong!');
  },
};
