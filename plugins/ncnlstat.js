
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {

await m.reply(wait)

try {
let ncnlstat = await fetch(`https://mcapi.us/server/status?ip=play.ncnl.eu.org&port=40383`)

let sevre = await ncnlstat.json()
let thumb = `${sevre.favicon}`

let tegs = `
${global.htki} *NCNL Server* ${global.htka}
${global.gz} *Version:* ${sevre.version}
${global.gz} *Server Nams:* ${sevre.server.name}
${global.gz} *World Name:* ${sevre.map.clean}
${global.gz} *Game Mode:* ${sevre.gamemode}
${global.gz} *Player:* ${sevre.players.now}/${sevre.players.max}
${global.gz} *Online:* ${sevre.online}
${global.sb}

${sevre.motd.text}

${global.htki} *HOST & PORT* ${global.htka}
${global.gz} *Host:* ${sevre.hostname}
${global.gz} *IP:* ${sevre.ip}
${global.gz} *Port:* ${sevre.port}
${global.sb}

API version: ${sevre.debug.apiversion}
    `
    
conn.sendMessage(m.chat, {
text: tegs,
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
handler.help = ['mcstalk']
handler.command = /^mcstalk$/i
handler.group = true

export default handler