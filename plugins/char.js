
import thum from 'api-dylux'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {

 
if (!text) throw `✳️ Anime Character Information\n\nContoh: !char Akebi Komichi`
 
let ling = await fetch(`https://api.yanzbotz.my.id/api/cari/chara?query=${text}`)
let char = await ling.json()
m.reply(wait)

let gmbr = await thum.googleImage(text)

let detil = `
*Nama:* ${char.result.nama}
*Gender:* ${char.result.gender}
*Warna Rambut:* ${char.result.warna_rambut}
*Warna Mata:* ${char.result.warna_mata}
*Gol. Darah:* ${char.result.gol_darah}
*Ulang Tahun:* ${char.result.birthday}
*Deskripsi:* ${char.result.description}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Character Info'),
body: char.result.nama,
thumbnailUrl: gmbr.getRandom(),
mediaType: 1,
renderLargerThumbnail: true
}}},
{quoted: m})

//await conn.sendMessage(m.chat, detil, gmbr.getRandom(), 'thumb.jpg', m)

 }
handler.help = ['char'].map(v => v + ' <nama>')
handler.tags = ['dl']
handler.command = /^((char|acter)?)$/i
handler.diamond = true

export default handler


//https://api.yanzbotz.my.id/api/cari/chara?query=akebi