const Discord = require('discord.js')
const {PREFIX} = require('../config.json')
module.exports = {
  name: "yardım",
  description: "yardım",
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                        .setColor("RED")

                      .setDescription(
    `
\`${PREFIX}oynat <şarkı-adı>\` : **Bir Şarkıyı Oynatır.**
\`${PREFIX}atla\` : **Sıradaki Şarkıyı atlar.**
\`${PREFIX}döngü\` : **O Anki şarkıyı Hep tekrarlar.**
\`${PREFIX}durdur\` : **O anki Şarkıyı Durdurur.**
\`${PREFIX}devam\` : **Duran Şarkıyı Devam Ettirir.**
\`${PREFIX}sıra\` : **O Anki Sırayı Gösterir.**
\`${PREFIX}np\` : **O Anki Oynatılan Şarkıyı Söyler.**



`)
                       .setImage("https://cdn.discordapp.com/attachments/807612090093142026/898891416921595924/pggg.png")
                         .setFooter(`*                                     ${client.user.username} | © 2021                                             *`)

                      )    
}
}
