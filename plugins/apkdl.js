//https://vihangayt.me/download/apk?id=

import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  

if (!text) throw `✳️ Download aplikasi menggunakan ID\n\nContoh: !apkdl com.whatsapp`
m.reply(wait)
 
try {
let ling = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
let apkdl = await ling.json()

let detil = `
Nama Aplikasi: ${data.ling.name}
Update: ${data.ling.lastup}
Nama Paket: ${data.ling.package}
Ukuran: ${data.ling.size}
`

conn.sendMessage(m.chat, {text: mika,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: (`${username}`),
body: ('Aku Online Kak!'),
thumbnailUrl: (`${data.ling.icon}`),
sourceUrl: global.fbku,
mediaType: 1,
renderLargerThumbnail: false
}}},
{quoted: m})

conn.sendMessage(m.chat, { document: { url: data.ling.dllink }, fileName: data.ling.name }, { quoted: m })

 }
 catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
}
handler.help = ['apkdl']
handler.command = /^apkdl$/i
handler.diamond = true
export default handler
