
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
let thumb = 'https://telegra.ph/file/016c521fb63069af28cec.jpg'
await m.reply(wait)

try {
let ncnlstat = await fetch(`https://api.mcsrvstat.us/bedrock/3/play.ncnl.eu.org:40383`)
let sevre = await ncnlstat.json()

let tegs = `
${global.htki} *NCNL Server* ${global.htka}
${global.gz} *Versi:* ${sevre.version}
${global.gz} *MOTD:* ${sevre.motd.clean}
${global.gz} *Nama Dunia:* ${sevre.map.clean}
${global.gz} *Mode:* ${sevre.gamemode}
${global.gz} *Pemain:* ${sevre.players.online}/${sevre.players.max}
${global.gz} *Status:* ${sevre.online}
${global.sb}

${global.htki} *HOST & PORT* ${global.htka}
${global.gz} *Host:* ${sevre.hostname}
${global.gz} *Port:* ${sevre.port}
${global.sb}
`
    
conn.sendMessage(m.chat, {
text: (`${tegs}`).replace('true','Online','false','Offline'),
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: (`NCNL Minecraft`),
body: (`${sevre.hostname}:${sevre.port}`),
thumbnailUrl: thumb,
sourceUrl: ('minecraft://?addExternalServer=NCNL Legacy|play.ncnl.eu.org:40383'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}}, {quoted: m})

	}
	catch {
		m.reply(`👾 Server sedang offline\n\nHost: play.ncnl.eu.org\nPort: 40383`)
	}
//end

}
handler.help = ['server']
handler.customPrefix = /^ncnl|server$/i
handler.command = new RegExp
handler.group = true

export default handler