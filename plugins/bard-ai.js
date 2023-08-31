
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Masukkan Teks\n\nContoh: !bard Siapa pendiri WhatsApp`
m.react('💬')

	try {
	    let bard = await fetch(`https://api.azz.biz.id/api/bard?q=${text}&key=mangea`)
     ;
        let res = await bard.json()
        await m.reply(res.respon)
	} catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}

}
handler.help = ['bard <text>']
handler.tags = ['ai']
handler.command = ['bard','bardai']
handler.premium = false
handler.diamond = true

export default handler
