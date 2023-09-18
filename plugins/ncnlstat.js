
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
let thumb = 'https://telegra.ph/file/016c521fb63069af28cec.jpg'
let kace = 'https://api.mcsrvstat.us/icon/play.genix.eu.org:29427'
m.reply(wait)


try {


let ncnlstat = await fetch(`https://api.mcsrvstat.us/bedrock/3/play.genix.eu.org:29427`)
//if (!online) throw fetch('https://api.mcsrvstat.us/bedrock/simple/play.genix.eu.org:29427')

let sevre = await ncnlstat.json()
if (!offline) throw 
    
let tegs = `
${global.htki} *GenIX Server* ${global.htka}
${global.gz} *Version:* ${sevre.protocol.name}
${global.gz} *MOTD:* ${sevre.motd.clean}
${global.gz} *Game Mode:* ${sevre.gamemode}
${global.gz} *World Name:* ${sevre.map.clean}
${global.gz} *Player:* ${sevre.players.online}
${global.gz} *Max Player:* ${sevre.players.max}
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
sourceUrl: ('minecraft://?addExternalServer=GenIX Network|play.genix.eu.org:29427'),
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