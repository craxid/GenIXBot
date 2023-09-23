
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  

if (!arg[0]) throw  `Masukan nama host dan ip\nhost.pe:19132`
await m.reply(wait)

try {
let ncnlstat = await fetch(`https://api.mcsrvstat.us/bedrock/3/${response[0]}`)
let sevre = await ncnlstat.json()

let tegs = `
${global.htki} *NCNL Server* ${global.htka}
${global.gz} *Version:* ${sevre.version}
${global.gz} *MOTD:* ${sevre.motd.clean}
${global.gz} *World Name:* ${sevre.map}
${global.gz} *Game Mode:* ${sevre.gamemode}
${global.gz} *Player:* ${sevre.players.online}/${sevre.players.max}
${global.gz} *Status:* ${sevre.online}
${global.sb}

${global.htki} *HOST & PORT* ${global.htka}
${global.gz} *Host:* ${sevre.hostname}
${global.gz} *IP:* ${sevre.ip}
${global.gz} *Port:* ${sevre.port}
${global.sb}

API version: ${sevre.debug.apiversion}
    `
let thumb = 'https://telegra.ph/file/016c521fb63069af28cec.jpg'
     
conn.sendMessage(m.chat, {
text: (`${tegs}`).replace('true','Online').replace('undefined','tidak diketahui'),
contextInfo: {
externalAdReply: {
title: (`Server Stalker`),
body: (`${sevre.hostname}:${sevre.port}`),
thumbnailUrl: thumb,
sourceUrl: ('minecraft://?addExternalServer=NCNL Legacy|play.genix.eu.org:29427'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}})

	}
	catch {
		m.reply(`👾 Server sedang offline\n\nHost: play.genix.eu.org\nPort: 29427`)
	}
//end

}
handler.help = ['server']
handler.customPrefix = /^mcstalk|mcstalk$/i
handler.command = new RegExp
handler.group = false

export default handler