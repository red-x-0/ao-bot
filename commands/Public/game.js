const { COOLDOWN } = require('../../JSON/config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'game',
    cooldown: COOLDOWN,
    usage: ``,
    aliases: ['GAME','لعبة','quiz','سؤال'],
    execute(client, message, args) {

                const quiz = require('../../JSON/quiz.json');
        // ...
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };

        message.reply({ content: item.question, fetchReply: true })
            .then(() => {
                message.channel.awaitMessages({ filter, max: 1, time: 30000, errors: ['time'] })
                    .then(collected => {
                        message.channel.send(`${collected.first().author} got the correct answer!`);
                    })
                    .catch(collected => {
                        message.channel.send('Looks like nobody got the answer this time.');
                    });
            });

    }
}