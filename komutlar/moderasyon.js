const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Aleria Fun sizlerle.")
.setTitle("<a:755796676454776883:757341125697863701> Aleria Moderasyon Komutları <a:755796676454776883:757341125697863701>")
 .setTimestamp()
.setDescription("<a:7027_star_red:754063216287547504> **-sil** = Yazdığınız miktarda mesajı siler.\n <a:7027_star_red:754063216287547504> **-kick** = Etiketlediğiniz kişiyi atarsınız. <a:7027_star_red:754063216287547504> \n <a:7027_star_red:754063216287547504> **-duyuru** = Bota duyuru yaptırırsınız. <a:7027_star_red:754063216287547504> \n <a:7027_star_red:754063216287547504> **-küfür** = Küfür engel sistemini açarsınız. <a:7027_star_red:754063216287547504> \n <a:7027_star_red:754063216287547504> **-reklam** = Reklam engel sistemi açarsınız. <a:7027_star_red:754063216287547504> \n <a:7027_star_red:754063216287547504> **-slowmode** = Yavaş modu ayarlarsınız. <a:7027_star_red:754063216287547504> \n <a:7027_star_red:754063216287547504> **-forceban** = Birisine id ban atarsınız. <a:developeremoji:749525084586115153> \n <a:7027_star_red:754063216287547504> **-unban** = Birisinin banını açarsınız. <a:7027_star_red:754063216287547504> \n <a:7027_star_red:754063216287547504> **-sa-as** = Bot biri sa dedimi cevap verir. <a:7027_star_red:754063216287547504> \n <a:7027_star_red:754063216287547504> **-sunucubilgi** = Sunucu bilgilerini görürsün. <a:developeremoji:749525084586115153> \n <a:7027_star_red:754063216287547504> **-üyedurum** = Üyelerin durumlarını görürsün. <a:7027_star_red:754063216287547504> \n <a:7027_star_red:754063216287547504> **-çekiliş** = Çekiliş başlatırsınız. <a:7027_star_red:754063216287547504>")
.setImage("")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}