module.exports = {
  name: 'clear',
 async execute(client, message, args) {

message.delete({timeout: 0})
  if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
   if(!message.member.permissions.has('MANAGE_MASSAGE')) return message.reply('**عذراً انت لا تكلم صلاحية **  `MANAGE_MESSAGES`'); 

 
  let messagecount = parseInt(args);
  if (args > 0) return message.channel.send({content: `\`\`\`javascript
i cant delete more than 100 mehfodssages 
\`\`\``}).then(messages => messages.delete(5000))
if(!messagecount) messagecount = '0';
  message.channel.messages.fetch({limit: 100 }).then(e => {
  message.channel.send('Deleting messages...').then(function(e) {
  setTimeout(function() {
      message.channel.bulkDelete(messagecount).then(msgs => {
      let msgsize = msgs.size
  message.channel.send({content: `\`\`\`js
${msgsize} messages cleared
\`\`\``}).then(messages => {
setTimeout(() => {
  messages.delete()
}, 4000)
  })
  }).catch(err => 0)
  }, 600)
  })
  })

  }
}