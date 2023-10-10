
import fetch from 'node-fetch'
let limit = 15

let handler = async (m, { conn, text, args, usedPrefix, command }) => {

 
if (!args[0]) throw `Link not found..\n\nExample:\n${usedPrefix}sfile https://sfile.mobi/1Qot1AZcAsS7`
 
let ling = await fetch(`https://api.yanzbotz.my.id/api/downloader/sfile?url=${args[0]}`)
let sfiledl = await ling.json()

let detil = `
*Nama:* ${sfiledl.result.title}
*Tipe:* ${sfiledl.result.mimetype}

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
body: (`${text}`),
sourceUrl: global.fbku,
mediaType: 1,
renderLargerThumbnail: true
}}},
{quoted: m})

await conn.sendFile(m.chat, sfiledl.result.url, 0, {fileName: `${sfiledl.result.title}`})


}
handler.help = ['sfile'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((sfile|dl)?)$/i
handler.diamond = true

export default handler

//https://api.yanzbotz.my.id/api/downloader/sfile?url=https://sfile.mobi/2SoXEZQi3mF