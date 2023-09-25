
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Membuat Gambar AI menggunakan perintah yang diberikan pengguna\n\nContoh: !stabledif 1girls`
m.react('💬')

//code area
try {
let diff2 = await fetch(`https://api.yanzbotz.my.id/api/text2img/absolutelyV2?prompt=${text}`)
	    
let stabdif = await diff2.json()
let setab = Math.floor(Math.random() * difu)
conn.sendMessage(m.chat, stabdif.result.url, 'img.jpg', `*[ STABLE DIFFUSION ]*\n\nPROMPT:\n${text}`, m)
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