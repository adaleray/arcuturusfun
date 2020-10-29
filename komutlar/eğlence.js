const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Aleria Fun yeniden sizlerle.")
.setTitle("<a:745864654450065479:757640512055541912> Aleria Eğlence Komutları <a:745864654450065479:757640512055541912>")
 .setTimestamp()
.setDescription("<a:B_Kristal:749194671527428126> **-tersyazı** = Bir Yazıyı Bot Ters Yazar. <a:B_Kristal:749194671527428126> \n <a:B_Kristal:749194671527428126> **-mcskin** = Yazdığınız ismin minecraft görünüşünü atar. <a:B_Kristal:749194671527428126> \n <a:B_Kristal:749194671527428126> **-fbi** = Bot FBi Gif Atar. <a:B_Kristal:749194671527428126> \n <a:B_Kristal:749194671527428126> **-token** = Tokenimi Öğrenmek İstemezmisin? <a:developeremoji:749525084586115153> \n <a:B_Kristal:749194671527428126> **-düello** = Düello Atarsın. <a:B_Kristal:749194671527428126> \n <a:B_Kristal:749194671527428126>**-wasted** = Polis tarafından yakalanırsın. <a:B_Kristal:749194671527428126> \n <a:B_Kristal:749194671527428126> **-atatürk** = Dene ve gör... (1881-1938) <a:B_Kristal:749194671527428126>")
.setImage("")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}