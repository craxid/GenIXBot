
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
let thumb = 'https://telegra.ph/file/016c521fb63069af28cec.jpg'
m.reply(wait)

//code area
try {
    let ncnlstat = await fetch(`https://api.mcstatus.io/v2/status/bedrock/de-1.retslav.nl:29427`)
    let statu = await ncnlstats.json()
    
    let tegs = `
    *NCNL Server*
    
    Status: ${statu.online}
    Host: ${statu.host}
    Port: ${statu.port}
    `
conn.sendMessage(m.chat, {
text: tegs,
contextInfo: {
externalAdReply: {
title: (`NCNL Stalker`),
body: ('Status Server'),
thumbnailUrl: thumb,
sourceUrl: ('minecraft://?addExternalServer=NCNL Legacy|NCNL_Legacy.aternos.me:40383'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}})
//let diff = await conn.getFile(`https://api.azz.biz.id/api/animediffusion?q=${text}&key=mangea`)
	    
//conn.sendFile(m.chat, statu.data, 'img.jpg', `*[ ANIME DIFFUSION ]*\n\nPROMPT:\n${text}`, m)

	}
	catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
//end

}
handler.help = ['mcstalk']
handler.tags = ['tools']
handler.command = ['mcstalk']
handler.premium = false
handler.diamond = false

export default handler

/*let gpt = await fetch(`https://api.azz.biz.id/api/gpt?q=${text}&key=mangea`)*/