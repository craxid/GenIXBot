
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Membuat Gambar AI menggunakan perintah yang diberikan pengguna\n\nContoh: !txt2img 1girls`
m.react('💬')

//code area
try {
let diff = await conn.getFile(`https://api.azz.biz.id/api/text2img?q=${text}&key=mangea`)
	    
conn.sendFile(m.chat, diff.data, 'img.jpg', `*[ TEXT TO IMAGE ]*\n\nPROMPT:\n${text}`, m)
	}
	
conn.sendMessage(m.chat, diff.data, 'img.jpg', m, {
text: mika,
contextInfo: {
externalAdReply: {
title: ('Mika Misono Bot'),
body: ('Jangan Spam Bot!'),
thumbnailUrl: mikapp,
sourceUrl: ('https://www.facebook.com/dede2015k'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
	
	catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
//end

}
handler.help = ['txt2img <text>']
handler.tags = ['ai']
handler.command = ['txt2img','diff2','imgai','img']
handler.premium = false
handler.diamond = true

export default handler

/*let gpt = await fetch(`https://api.azz.biz.id/api/gpt?q=${text}&key=mangea`)*/