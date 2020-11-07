const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Aleria Fun Sizlerle.")
.setTitle("<a:750341192008597684:772455369221734420> Aleria Eğlence Komutları <a:750341192008597684:772455369221734420>")
 .setTimestamp()
.setDescription("<a:B_Kristal:749194671527428126> **-tersyazı** = Bir Yazıyı Bot Ters Yazar. <a:B_Kristal:749194671527428126> \n <a:B_Kristal:749194671527428126> **-mcskin** = Yazdığınız ismin minecraft görünüşünü atar. <a:B_Kristal:749194671527428126> \n <a:B_Kristal:749194671527428126> **-fbi** = Bot FBi Gif Atar. <a:B_Kristal:749194671527428126> \n <a:B_Kristal:749194671527428126> **-token** = Tokenimi Öğrenmek İstemezmisin? <a:developeremoji:749525084586115153> \n <a:B_Kristal:749194671527428126> **-düello** = Düello Atarsın. <a:B_Kristal:749194671527428126> \n <a:B_Kristal:749194671527428126>**-wasted** = Polis tarafından yakalanırsın. <a:B_Kristal:749194671527428126> \n <a:B_Kristal:749194671527428126> **-atatürk** = Dene ve gör... (1881-1938) <a:B_Kristal:749194671527428126> \n<a:749194316634652712:772455318584164372>**-yazan-kazanır** = ilk yazan kazanır<a:749194316634652712:772455318584164372> \n<a:770740514152644620:773632502128050206>**-tkm** = taş kağıt makas oynarsınız<a:770740514152644620:773632502128050206>")
.setImage("https://cdn.discordapp.com/attachments/769159402137059383/772838745467518997/unknown.png")
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