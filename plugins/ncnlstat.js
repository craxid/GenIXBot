
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
let thumb = 'https://telegra.ph/file/016c521fb63069af28cec.jpg'
await m.reply(wait)

try {
let ncnls = await fetch(`https://api.mcsrvstat.us/bedrock/3/craft.pe`)
let sevre = await ncnls.json()

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
title: (`Server Stalker`),
body: (`${sevre.hostname}:${sevre.port}`),
thumbnailUrl: thumb,
sourceUrl: ('minecraft://?addExternalServer=NCNL Legacy|craft.pe:19132'),
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted: m})

	}
	catch {
		m.reply(`👾 Server sedang offline\n\nHost: craft.pe\nPort: 19132`)
	}
//end

}
handler.help = ['mcstalk']
handler.customPrefix = /^mcstalk$/i
handler.command = new RegExp
handler.group = true

export default handler