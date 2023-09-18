
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
let thumb = 'https://telegra.ph/file/016c521fb63069af28cec.jpg'
m.reply(wait)

//code area
try {
    let ncnlstat = await fetch(`https://api.mcstatus.io/v2/status/bedrock/play.emperials.net`)
    let statu = await ncnlstat.json()
    
    let tegs = `
    *NCNL Server*
    
    Name: ${statu.name_raw}
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