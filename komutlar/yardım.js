const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Aleria Fun yeniden sizlerle.")
.setTitle("<a:Yldz:742698148329291826> Aleria yardım menüsüne hoşgeldin! <a:Yldz:742698148329291826>")
 .setTimestamp()
.setDescription("<a:destinyhype:751090021859196968> **-eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n <a:ayarlardestiny:751089592245158030> **-moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n <a:partnerdestiny:751089594694631465> **-kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n <a:Yldz:742698148329291826> **-logo** = __Logo komutlarını görüntülersiniz.__")
.setImage("")
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