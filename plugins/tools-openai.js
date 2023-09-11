
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Masukkan Teks\n\nContoh: !gpt Siapa pendiri WhatsApp`
m.react('💬')

// gpt

	try {
	    
	    let gpt = await fetch(`https://api.yanzbotz.my.id/api/ai/openai?query=${text}`)
	    
	    /*let gpt = await fetch(`https://api.azz.biz.id/api/gpt?q=${text}&key=mangea`)*/
     ;
        let res = await gpt.json()
        await m.reply(res.choices.text)
	} catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}

}
handler.help = ['gpt <text>']
handler.tags = ['ai']
handler.command = ['ai', 'chatgpt', 'openai', 'gpt']
handler.premium = false
handler.diamond = true

export default handler
