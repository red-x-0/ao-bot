const fs = require('fs');
const ascii = require('ascii-table');
let table = new ascii(`Events`);
table.setHeading('Events', 'Load Status');

module.exports = (client) => {
  try {
    fs.readdirSync('./events').forEach((folder) => {
      const eventFiles = fs.readdirSync(`./events/${folder}`).filter(file => file.endsWith('.js'));

      for (const file of eventFiles) {
          const event = require(`../events/${folder}/${file}`);
          if (event.once) {
              client.once(event.name, (...args) => event.execute(client, ...args));
              table.addRow(file, '✅');
          } else {
              client.on(event.name, (...args) => event.execute(client, ...args));
              table.addRow(file, '❌')
          }
      }
    })
    console.log(table.toString());
  } catch (error) {
    console.error('Error loading events:', error);
  }
}