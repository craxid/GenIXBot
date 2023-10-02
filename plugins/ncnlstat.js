
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
let thumb = 'https://telegra.ph/file/016c521fb63069af28cec.jpg'
await m.reply(wait)

try {
let ncnlstat = await fetch(`https://api.mcsrvstat.us/bedrock/3/craft.pe`)
let sevre = await ncnlstat.json()

let tegs = `
${global.htki} *NCNL Server* ${global.htka}
${global.gz} *Version:* ${sevre.version}
${global.gz} *MOTD:* ${sevre.motd.clean}
${global.gz} *World Name:* ${sevre.map.clean}
${global.gz} *Game Mode:* ${sevre.gamemode}
${global.gz} *Player:* ${sevre.players.online}/${sevre.players.max}
${global.gz} *Status:* ${sevre.online}
${global.sb}

${global.htki} *HOST & PORT* ${global.htka}
${global.gz} *Host:* ${sevre.hostname}
${global.gz} *IP:* ${sevre.ip}
${global.gz} *Port:* ${sevre.port}
${global.sb}

API version: ${sevre.debug.apiversion}`
    
await conn.sendMessage(m.chat, {
text: (text),
contextInfo: {
externalAdReply: {
title: (`Server Stalker`),
body: (`${sevre.hostname}:${sevre.port}`),
thumbnailUrl: thumb,
sourceUrl: ('minecraft://?addExternalServer=NCNL Legacy|craft.pe:19132'),
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
handler.help = ['mcstalk']
handler.customPrefix = /^mcstalk$/i
handler.command = new RegExp
handler.group = false

export default handler