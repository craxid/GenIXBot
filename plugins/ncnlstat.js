
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
let thumb = 'https://telegra.ph/file/016c521fb63069af28cec.jpg'
await m.reply(wait)

try {
let ncnlstat = await fetch(`https://api.mcsrvstat.us/bedrock/3/ncnl.aternos.org:17810`)
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

/*conn.relayMessage(from,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: "1000000",
      requestFrom: sender,
      noteMessage: {
        extendedTextMessage: {
        text: (`${tegs}`).replace('true','Online').replace('undefined','tidak diketahui'),
        contextInfo: {
        mentionedJid: [sender],
        externalAdReply: {
        showAdAttribution: true
  }}}}}}, {})*/


conn.sendMessage(m.chat, {
text: (`${tegs}`).replace('true','Online').replace('undefined','tidak diketahui'),
contextInfo: {
externalAdReply: {
title: (`Server Stalker`),
body: (`${sevre.hostname}:${sevre.port}`),
thumbnailUrl: thumb,
sourceUrl: ('minecraft://?addExternalServer=NCNL Network|ncnl.aternos.org:17810'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}})

	}
	catch {
		m.reply(`👾 Server sedang offline\n\nHost: ncnl.aternos.org\nPort: 17810`)
	}
//end

}
handler.help = ['server']
handler.customPrefix = /^mcstalk|mcstalk$/i
handler.command = new RegExp
handler.group = false

export default handler