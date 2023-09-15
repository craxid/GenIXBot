
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Membuat Gambar AI menggunakan perintah yang diberikan pengguna\n\nContoh: !animedif 1girls`
m.reply(wait)

//code area

    let ntot = await fetch(`https://api.neoxr.eu/api/waifudiff?q=${text}`)
    
    let data1 = await ntot.json()
    let hasil = await data1
	    
conn.sendFile(m.chat, hasil.ntot.data.url, 'img.jpg', `*[ ANIME DIFFUSION ]*\n\nPROMPT:\n${text}`, m)

	catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
//end

}
handler.help = ['animedif2 <text>']
handler.tags = ['ai']
handler.command = ['animedif2','nimedif2']
handler.premium = false
handler.diamond = true

export default handler

/*let gpt = await fetch(`https://api.azz.biz.id/api/gpt?q=${text}&key=mangea`)*/