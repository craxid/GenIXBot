//https://vihangayt.me/download/apk?id=

import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  

if (!text) throw `✳️ Download aplikasi menggunakan ID\n\nContoh: !apkdl com.whatsapp`
m.reply(wait)
 
try {
let ling = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
let apkdl = await ling.json()

let detil = `
*Nama Aplikasi:* ${apkdl.data.name}
*Update:* ${apkdl.data.lastup}
*Nama Paket:* ${apkdl.data.package}
*Ukuran:* ${apkdl.data.size}

_Sedang mengirim..._
`

await conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('APK Downloader'),
body: (`${apkdl.data.name}`),
thumbnailUrl: (`${apkdl.data.icon}`),
sourceUrl: global.fbku,
mediaType: 1,
renderLargerThumbnail: false
}}},
{quoted: m})

await conn.sendMessage(m.chat, { document: { url: apkdl.data.dllink }, fileName: apkdl.data.name,  mimetype: apk }, { quoted: m })

 }
 catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
}
handler.help = ['apkdl']
handler.tags = ['dl']
handler.command = /^apkdl$/i
handler.diamond = 3
export default handler
