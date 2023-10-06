
import fb from 'api-dylux'
import fetch from 'node-fetch'
let limit = 15

let handler = async (m, { conn, text, usedPrefix, command }) => {

 
if (!text) throw `✳️ Download Video Facebook\n\nContoh: !fbdl https://www.facebook.com/dede2015k/videos/228452386672915`
 
try {
let ling = await fetch(`https://api.arifzyn.xyz/download/facebook?url=${text}`)
let fbdl = await ling.json()

let detil = `
*Deskripsi:* ${fbdl.data.desc}

_Sedang mengirim..._
`
let detil2 = `
*Deskripsi:* ${fbdl.data.desc}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Facebook Downloader'),
body: (`${fbdl.data.title}`),
thumbnailUrl: (`${fbdl.data.thumb}`),
sourceUrl: global.fbku,
mediaType: 1,
renderLargerThumbnail: true
}}},
{quoted: m})

await conn.sendFile(m.chat, fbdl.data.video.hd, 'ig.mp4', 'Facebook Downloader\n© Mika Bot', m)

 }
 catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.diamond = true

export default handler
