//https://vihangayt.me/download/apk?id=

import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  

if (!text) throw `✳️ Download aplikasi menggunakan ID\n\nContoh: !apkdl com.whatsapp`
 
try {
let ling = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
let apkdl = await ling.json()
let apkname =  `Nama Aplikasi : ${apkdl.data.name}.apk`
let detil = `
*Nama Aplikasi:* ${apkdl.data.name}
*Update:* ${apkdl.data.lastup}
*Nama Paket:* ${apkdl.data.package}
*Ukuran:* ${apkdl.data.size}

_Sedang mengirim..._
`

conn.sendMessage(m.chat, {text: detil,
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

await conn.sendFile(m.chat, apkdl.data.dllink, (`${apkdl.data.name}_(Mika_Bot).apk`), apkname, m)

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

