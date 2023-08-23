const { Client } = require("discord.js");

module.exports = {
    name: 'ready',
    once: true,
    /**
     * 
     * @param {Client} client 
     */
    execute(client) {
        console.log(`Logged in as ${client.user.tag}\n`);
        client.user.setActivity("$help", {type: "WATCHING"})
    }
}