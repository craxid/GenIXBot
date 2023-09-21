import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command }) => {
	let type = (args[1] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    if (!args[0]) return m.reply('Apikeynya mana?')
  
try {
let zen = await fetch(`https://api.zahwazein.xyz/user/cekapi?apikey=zenzkey_f59c1aacf2`)
let sevre = await ncnlstat.json()

let tegs = `
${global.htki} *API Stalker* ${global.htka}
${global.gz} *Version:* ${sevre.version}
${global.gz} *MOTD:* ${sevre.motd.clean}
${global.gz} *World Name:* ${sevre.map}
${global.gz} *Game Mode:* ${sevre.gamemode}
${global.gz} *Player:* ${sevre.players.online}/${sevre.players.max}
${global.sb}

${global.htki} *HOST & PORT* ${global.htka}
${global.gz} *Host:* ${sevre.hostname}
${global.gz} *IP:* ${sevre.ip}
${global.gz} *Port:* ${sevre.port}
${global.sb}

API version: ${sevre.debug.apiversion}`
    
conn.sendMessage(m.chat, {
text: tegs,
contextInfo: {
externalAdReply: {
title: (`API Stalker`),
body: ,
thumbnailUrl: thumb,
sourceUrl: ('minecraft://?addExternalServer=NCNL Legacy|play.ncnl.eu.org:40383'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}})

	}
	catch {
		m.reply(`👾 ERROR`)
	}
}

handler.command = /^(cek(key|api))$/i
export default handler

//https://api.zahwazein.xyz/user/cekapi?apikey=zenzkey_f59c1aacf2