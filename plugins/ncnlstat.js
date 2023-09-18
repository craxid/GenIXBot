
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ NCNL Status`
m.reply(wait)

//code area
try {
    let ncnlstat = await conn.getFile(`https://api.mcstatus.io/v2/status/bedrock/de-1.retslav.nl:29427`)
    let statu = await ncnlstats.json()
    
    let tegs = `
    *NCNL Server*
    
    Status ${statu.
    
    `
    
//let diff = await conn.getFile(`https://api.azz.biz.id/api/animediffusion?q=${text}&key=mangea`)
	    
//conn.sendFile(m.chat, statu.data, 'img.jpg', `*[ ANIME DIFFUSION ]*\n\nPROMPT:\n${text}`, m)

	}
	catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
//end

}
handler.help = ['animedif <text>']
handler.tags = ['ai']
handler.command = ['animedif','nimedif']
handler.premium = false
handler.diamond = true

export default handler

/*let gpt = await fetch(`https://api.azz.biz.id/api/gpt?q=${text}&key=mangea`)*/