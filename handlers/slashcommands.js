const fs = require('fs');
const ascii = require('ascii-table');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('../JSON/config.json');

let table = new ascii(`Slash Commands`);
table.setHeading('Command', 'Load Status');

module.exports = async (client) => {
  const commands = [];
  
  try {
    fs.readdirSync('./slash-commands').forEach((folder) => {
      const commandFiles = fs.readdirSync(`./slash-commands/${folder}`).filter(file => file.endsWith('.js'));
      for (file of commandFiles) {
          let command = require(`../slash-commands/${folder}/${file}`);
          if (command.data) {
              commands.push(command.data.toJSON());
              table.addRow(file, '✅');
          } else {
              table.addRow(file, '❌ ');
              continue;
          }
      }
  });

  console.log(table.toString());

  const rest = new REST({ version: '10' }).setToken(token);

  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }

  } catch (error) {
    console.error('Error loading slash commands:', error);
  }
}
