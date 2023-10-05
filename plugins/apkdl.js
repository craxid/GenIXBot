//https://vihangayt.me/download/apk?id=

import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  

if (!text) throw `✳️ Download aplikasi menggunakan ID\n\nContoh: !apkdl com.whatsapp`
m.reply(wait)
 
try {
let ling = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
let apkdl = await ling.json()

let detil = `
Nama Aplikasi: ${data.apkdl.name}
Update: ${data.apkdl.lastup}
Nama Paket: ${data.apkdl.package}
Ukuran: ${data.apkdl.size}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Mika Bot'),
body: ('APK Downloader'),
thumbnailUrl: (`${data.apkdl.icon}`),
sourceUrl: global.fbku,
mediaType: 1,
renderLargerThumbnail: false
}}},
{quoted: m})

conn.sendMessage(m.chat, { document: { url: data.apkdl.dllink }, fileName: data.apkdl.name }, { quoted: m })

 }
 catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
}
handler.help = ['apkdl']
handler.tags = ['dl']
handler.command = /^apkdl$/i
handler.diamond = true
export default handler
