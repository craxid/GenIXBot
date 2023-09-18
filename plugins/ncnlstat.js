
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
let thumb = 'https://telegra.ph/file/016c521fb63069af28cec.jpg'
m.reply(wait)

//code area
try {
    let ncnlstat = await fetch(`https://api.mcstatus.io/v2/status/bedrock/ncnl.aternos.me:17810`)
    let sevre = await ncnlstat.json()
    
    let tegs = `
${global.htka} *NCNL Server* ${global.htki}
    
${global.gz}MOTD: ${sevre.motd.clean}
${global.gz}Mode: ${sevre.gamemode}
${global.gz}Player Online: ${sevre.players.online}
${global.gz}Makx Player: ${sevre.players.max}
${global.sb}
    Online: ${sevre.online}
    Host: ${sevre.host}
    Port: ${sevre.port}
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