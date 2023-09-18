
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
let thumb = 'https://telegra.ph/file/016c521fb63069af28cec.jpg'
m.reply(wait)

//code area
try {
    let ncnlstat = await fetch(`https://api.mcstatus.io/v2/status/bedrock/play.ncnl.eu.org:17810`)
    let sevre = await ncnlstat.json()
    
if (!ncnlstat.true) let tegs = `
${global.htki} *NCNL Server* ${global.htka}
${global.gz} *Version:* ${sevre.version.name}
${global.gz} *MOTD:* ${sevre.motd.clean}
${global.gz} *Mode:* ${sevre.gamemode}
${global.gz} *Player Online:* ${sevre.players.online}
${global.gz} *Max Player:* ${sevre.players.max}
${global.gz} *Online:* ${sevre.online}
${global.gz} *Host:* ${sevre.host}
${global.gz} *Port:* ${sevre.port}
${global.gz} *Game Mode:* ${sevre.gamemode}
${global.sb}
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