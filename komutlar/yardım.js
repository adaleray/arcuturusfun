const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Aleria Fun yeniden sizlerle.")
.setTitle("<a:750341192008597684:772455369221734420> Aleria yardım menüsüne hoşgeldin! <a:750341192008597684:772455369221734420>")
 .setTimestamp()
.setDescription("<a:B_Alarm:749194316634652712> **-eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n <a:B_Alarm:749194316634652712> **-moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n <a:B_Alarm:749194316634652712> **-kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n <a:B_Alarm:749194316634652712> **-logo** = __Logo komutlarını görüntülersiniz.__")
.setImage("https://cdn.discordapp.com/attachments/769159402137059383/772838745467518997/unknown.png")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}