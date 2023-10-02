
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Membuat Gambar AI menggunakan perintah yang diberikan pengguna\n\nContoh: !animedif 1girls`
m.reply(wait)

//code area
try {
    let animdif = await conn.getFile(`https://api.yanzbotz.my.id/api/text2img/neima?prompt=${text}`)
    
// let diff = await conn.getFile(`https://api.azz.biz.id/api/animediffusion?q=${text}&key=mangea`)


conn.sendMessage(m.chat, {text: '*[ANIME DI',
contextInfo: {
externalAdReply: {
title: (`${username}`),
body: (`Level: ${level}`),
thumbnailUrl: pp,
sourceUrl: global.fgig,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}}, {quoted: m})
	    
conn.sendFile(m.chat, animdif.data, 'img.jpg', `*[ ANIME DIFFUSION ]*\n\nPROMPT:\n${text}`, m)
	}
	catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
//end

}
handler.help = ['animedif (Your Prompt)']
handler.tags = ['ai']
handler.command = ['animedif','nimedif']
handler.premium = false
handler.diamond = 3

export default handler

/*let gpt = await fetch(`https://api.azz.biz.id/api/gpt?q=${text}&key=mangea`)*/