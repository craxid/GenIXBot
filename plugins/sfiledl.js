
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

let poto = `../src/avatar_contact.png`
let konpik = $sfiledl.result.mimetype.replace('hc/configuration','hc')

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Sfile Downloader'),
body: (`${text}`),
mediaType: 1,
thumbnailUrl: poto,
renderLargerThumbnail: true
}}},
{quoted: m})

await conn.sendFile(m.chat, sfiledl.result.url, (`${sfiledl.result.title}`), detil2, m)

}
handler.help = ['sfile'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((sfile|dl)?)$/i
handler.diamond = true

export default handler

//https://api.yanzbotz.my.id/api/downloader/sfile?url=https://sfile.mobi/2SoXEZQi3mF