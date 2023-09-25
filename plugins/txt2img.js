
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Membuat Gambar AI menggunakan perintah yang diberikan pengguna\n\nContoh: !txt2img 1girls`
m.reply(wait)

//code area
try {
  let diff = await conn.getFile(`https://api.yanzbotz.my.id/api/text2img/absolutelyV2?prompt=${text}`)
  
  
//let diff = await conn.getFile(`https://api.azz.biz.id/api/text2img?q=${text}&key=mangea`)
	    
conn.sendFile(m.chat, diff.data, 'img.jpg', `*[ TEXT TO IMAGE ]*\n\nPROMPT:\n${text}`, m)
	}
	catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
//end

}
handler.help = ['txt2img (Your Prompt)']
handler.tags = ['ai']
handler.command = ['txt2img','diff2','imgai','img']
handler.premium = false
handler.diamond = true
export default handler

/*let gpt = await fetch(`https://api.azz.biz.id/api/gpt?q=${text}&key=mangea`)*/