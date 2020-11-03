const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("#00ffea")
.setAuthor("Aleria Fun sürümüyle yeniden sizlerle.")
.setTitle("<a:2807_Dancing:770049397471182890> Arcturus Fun Logo Komutları <a:2807_Dancing:770049397471182890>")
 .setTimestamp()
.setDescription("<a:755572565392490546:772455408102932521> **-dinamik** = Dinamik logo oluşturur. <a:755572565392490546:772455408102932521> \n <a:755572565392490546:772455408102932521> **-altın** = Altın logo oluşturur. <a:755572565392490546:772455408102932521> \n <a:755572565392490546:772455408102932521> **-banner** = Banner logo oluşturur. <a:755572565392490546:772455408102932521> \n <a:755572565392490546:772455408102932521> **-basit** = Basit logo oluşturur. <a:755572565392490546:772455408102932521> \n <a:755572565392490546:772455408102932521>**-elmas** = Elmas logo oluşturur. <a:755572565392490546:772455408102932521> \n <a:755572565392490546:772455408102932521> **-sarı** = Sarı logo oluşturur. <a:755572565392490546:772455408102932521> \n <a:755572565392490546:772455408102932521> **-neonmavi** = Neon mavi logo oluşturur. <a:755572565392490546:772455408102932521> \n <a:755572565392490546:772455408102932521> **-kalın** = Kalın logo oluşturur. <a:755572565392490546:772455408102932521> \n <a:755572565392490546:772455408102932521> **-anime** = Anime yazı tipinde logo oluşturur. <a:755572565392490546:772455408102932521> \n <a:755572565392490546:772455408102932521> **-habbo** = Habbo yazı tipinde logo oluşturur. <a:755572565392490546:772455408102932521> \n <a:755572565392490546:772455408102932521> **-arrow** = Ok işaretli logo oluşturur. <a:755572565392490546:772455408102932521> \n <a:755572565392490546:772455408102932521> **-green** = Yeşil logo oluşturur. <a:755572565392490546:772455408102932521> \n <a:755572565392490546:772455408102932521> **-alev** = Alevli logo oluşturur. <a:755572565392490546:772455408102932521> \n <a:755572565392490546:772455408102932521> **-red** = Kırmızı logo oluşturur. <a:755572565392490546:772455408102932521>")
.setImage("https://habbofont.net/font/neon_blue/Aleria.gif")
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