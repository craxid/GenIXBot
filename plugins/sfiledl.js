
import fetch from 'node-fetch'
let limit = 15

let handler = async (m, { conn, text, usedPrefix, command }) => {

 
if (!text) throw `✳️ Download Video Facebook\n\nContoh: !sfile https://sfile.mobi/2SoXEZQi3mF`
 
try {
let ling = await fetch(`https://api.yanzbotz.my.id/api/downloader/sfile?url=${text}`)
let sfiledl = await ling.json()

let detil = `
*Nama:* ${sfiledl.result.title}

_Sedang mengirim..._
`
let detil2 = `
*Nama:* ${sfiledl.result.title}
*Tipe:* ${sfiledl.result.mimetype}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Sfile Downloader'),
body: global.namebot,
thumbnailUrl: (`${text}`),
sourceUrl: global.fbku,
mediaType: 1,
renderLargerThumbnail: true
}}},
{quoted: m})

await conn.sendFile(m.chat, sfiledl.result.url, filename, '', m, null, { mimetype: ext, asDocument: true })

 }
 catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
}
handler.help = ['sfile'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((sfile|dl)?)$/i
handler.diamond = true

export default handler

//https://api.yanzbotz.my.id/api/downloader/sfile?url=https://sfile.mobi/2SoXEZQi3mF