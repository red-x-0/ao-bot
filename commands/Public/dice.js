const { COOLDOWN } = require('../../JSON/config.json');
const { channel } = require('../../JSON/config.json');
const { banner } = require('../../JSON/config.json')
module.exports = {
    name: 'dice',
    cooldown: COOLDOWN,
    usage: ``,
    aliases: ['نرد','DICE','زهر'],
    execute(client, message, args) {

        const messages = ["1", "2", "3", "4", "5", "6"]
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        message.reply(randomMessage)
        

    }
}