
import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix }) => {
let thumb = 'https://telegra.ph/file/016c521fb63069af28cec.jpg'
let kace = 'https://api.mcsrvstat.us/icon/play.genix.eu.org:29427'


try {

let ncnlstat = await fetch(`https://api.mcsrvstat.us/bedrock/3/play.genix.eu.org:29427`)
m.reply(wait)
let sevre = await ncnlstat.json()
    
let tegs = `
${global.htki} *GenIX Server* ${global.htka}
${global.gz} *Version:* ${sevre.protocol.name}
${global.gz} *MOTD:* ${sevre.motd.clean}
${global.gz} *World Name:* ${sevre.map.clean}
${global.gz} *Game Mode:* ${sevre.gamemode}
${global.gz} *Player:* ${sevre.players.online}/${sevre.players.max}
${global.gz} *Online:* ${sevre.online}
${global.sb}

${global.htki} *HOST & PORT* ${global.htka}
${global.gz} *Host:* ${sevre.hostname}
${global.gz} *Port:* ${sevre.port}
${global.sb}
    `
    
conn.sendMessage(m.chat, {
text: tegs,
contextInfo: {
externalAdReply: {
title: (`Server Stalker`),
body: (`${sevre.hostname}:${sevre.port}`),
thumbnailUrl: thumb,
sourceUrl: (`minecraft://?addExternalServer=GenIX Server|play.genix.eu.org:294`),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}})

	}
	catch {
		m.reply(`👾 Server sedang offline`)
	}
//end

}
handler.help = ['mcstalk']
handler.tags = ['tools']
handler.command = ['mcstalk']
handler.premium = false
handler.diamond = false

export default handler