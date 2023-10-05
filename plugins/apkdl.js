//https://vihangayt.me/download/apk?id=

import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  
	
if (!text) throw `✳️ Download aplikasi menggunakan ID\n\nContoh: !apkdl com.whatsapp`
m.reply(wait)
 
try {
let ling = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
let apkdl = await ling.json()

let detil = `
Nama Aplikasi: ${ling.name}
Update: ${ling.lastup}
Nama Paket: ${ling.package}
Ukuran: ${ling.size}
`

conn.sendMessage(m.chat, {text: mika,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: (`${username}`),
body: ('Aku Online Kak!'),
thumbnailUrl: (`${ling.icon}`),
sourceUrl: global.fbku,
mediaType: 1,
renderLargerThumbnail: false
}}},
{quoted: m})

conn.sendMessage(m.chat, { document: { url: ling.dllink }, fileName: ling.name }, { quoted: m })

 }
}
handler.help = ['apkdl ']
handler.command = /^a$/i
handler.rowner = true
export default handler
