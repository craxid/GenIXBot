
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Membuat Gambar AI menggunakan perintah yang diberikan pengguna\n\nContoh: !stabledif 1girls`
m.react(wait)

//code area
try {
  let stabdif = await conn.getFile(`https://api.yanzbotz.my.id/api/text2img/absolutelyv2?prompt=${text}`)
  
  
//let diff = await conn.getFile(`https://api.azz.biz.id/api/text2img?q=${text}&key=mangea`)
	    
conn.sendFile(m.chat, stabdif.data, 'img.jpg', `*[ STABLE DIFFUSION ]*\n\nPROMPT:\n${text}`, m)
	}
	catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}

//end

}
handler.help = ['stabledif <text>']
handler.tags = ['ai']
handler.command = ['diff','stabledif']
handler.premium = false
handler.diamond = 3

export default handler

/*let gpt = await fetch(`https://api.azz.biz.id/api/gpt?q=${text}&key=mangea`)*/