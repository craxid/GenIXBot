
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Membuat Gambar AI menggunakan perintah yang diberikan pengguna\n\nContoh: !animedif 1girls`
m.react('💬')

//code area
try {
let diff = await conn.getFile(``)
	    
conn.sendFile(m.chat, diff.data, 'img.jpg', `*[ANIME DIFUSSION]*\n\nPROMPT:\n${text}`, m)
	}
	catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
//end

}
handler.help = ['enchant <picture>']
handler.tags = ['ai']
handler.command = ['enchant','remini', 'hd', 'tohd']
handler.premium = false
handler.diamond = true

export default handler

/*let gpt = await fetch(`https://api.azz.biz.id/api/gpt?q=${text}&key=mangea`)*/