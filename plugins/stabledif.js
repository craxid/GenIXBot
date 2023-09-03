
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Membuat Gambar AI menggunakan perintah yang diberikan pengguna\n\nContoh: !stabledif 1girls`
m.react('💬')

//code area
try {
let diff = await conn.getFile(`https://api.zayn-c.my.id/ai-diffusion?text=${text}`)
	    
conn.sendFile(m.chat, diff.data, 'img.jpg', `*[STABLE DIFUSION]*\n\nPROMPT:\n${text}`, m)
	}
	catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
//end

}
handler.help = ['stabledif <text>']
handler.tags = ['ai']
handler.command = ['diff2','stabledif']
handler.premium = false
handler.diamond = 3

export default handler

/*let gpt = await fetch(`https://api.azz.biz.id/api/gpt?q=${text}&key=mangea`)*/