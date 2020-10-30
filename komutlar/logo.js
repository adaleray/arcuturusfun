const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Aleria Fun sürümüyle yeniden sizlerle.")
.setTitle("<a:755796676454776883:757341125697863701> Arcturus Fun Logo Komutları <a:755796676454776883:757341125697863701>")
 .setTimestamp()
.setDescription("<a:745864637924245605:757640482175320156> **-dinamik** = Dinamik logo oluşturur. <a:745864637924245605:757640482175320156> \n <a:745864637924245605:757640482175320156> **-altın** = Altın logo oluşturur. <a:745864637924245605:757640482175320156> \n <a:745864637924245605:757640482175320156> **-banner** = Banner logo oluşturur. <a:745864637924245605:757640482175320156> \n <a:745864637924245605:757640482175320156> **-basit** = Basit logo oluşturur. <a:745864637924245605:757640482175320156> \n <a:745864637924245605:757640482175320156>**-elmas** = Elmas logo oluşturur. <a:745864637924245605:757640482175320156> \n <a:745864637924245605:757640482175320156> **-sarı** = Sarı logo oluşturur. <a:745864637924245605:757640482175320156> \n <a:745864637924245605:757640482175320156> **-neonmavi** = Neon mavi logo oluşturur. <a:745864637924245605:757640482175320156> \n <a:745864637924245605:757640482175320156> **-kalın** = Kalın logo oluşturur. <a:745864637924245605:757640482175320156> \n <a:745864637924245605:757640482175320156> **-anime** = Anime yazı tipinde logo oluşturur. <a:745864637924245605:757640482175320156> \n <a:745864637924245605:757640482175320156> **-habbo** = Habbo yazı tipinde logo oluşturur. <a:745864637924245605:757640482175320156> \n <a:745864637924245605:757640482175320156> **-arrow** = Ok işaretli logo oluşturur. <a:745864637924245605:757640482175320156> \n <a:745864637924245605:757640482175320156> **-green** = Yeşil logo oluşturur. <a:745864637924245605:757640482175320156> \n <a:745864637924245605:757640482175320156> **-alev** = Alevli logo oluşturur. <a:745864637924245605:757640482175320156> \n <a:745864637924245605:757640482175320156> **-red** = Kırmızı logo oluşturur. <a:745864637924245605:757640482175320156>")
.setImage("")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}