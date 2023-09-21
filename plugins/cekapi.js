import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command }) => {
	let type = (args[1] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    if (!args[0]) return m.reply('Apikeynya mana?')
  
try {
let zenz = await fetch(`https://api.zahwazein.xyz/user/cekapi?apikey=zenzkey_f59c1aacf2`)
let zenzapi = await zenz.json()

let tegs = `
${global.htki} *API Stalker* ${global.htka}
${global.gz} *Version:* ${zenzapi.version}
${global.gz} *MOTD:* ${zenzapi.motd.clean}
${global.gz} *World Name:* ${zenzapi.map}
${global.gz} *Game Mode:* ${zenzapi.gamemode}
${global.gz} *Player:* ${zenzapi.players.online}/${zenzapi.players.max}
${global.sb}

${global.htki} *HOST & PORT* ${global.htka}
${global.gz} *Host:* ${zenzapi.hostname}
${global.gz} *IP:* ${zenzapi.ip}
${global.gz} *Port:* ${zenzapi.port}
${global.sb}

API version: ${zenzapi.debug.apiversion}`
    
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