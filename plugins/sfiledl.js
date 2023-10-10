

import fb from 'api-dylux'
import fetch from 'node-fetch'
let limit = 

let handler = async (m, { conn, text, usedPrefix, command }) => {

 
if (!text) throw `✳️ Download Video Facebook\n\nContoh: !sfile https://sfile.mobi/2SoXEZQi3mF`
 
try {
let ling = await fetch(`https://api.arifzyn.xyz/download/facebook?url=${text}`)
let sfiledl = await ling.json()

let detil = `
*Deskripsi:* ${sfiledl.result.desc}

_Sedang mengirim..._
`
let detil2 = `
*Deskripsi:* ${sfiledl.result.desc}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Facebook Downloader'),
body: global.namebot,
thumbnailUrl: (`${sfiledl.result.thumb}`),
sourceUrl: global.fbku,
mediaType: 1,
renderLargerThumbnail: true
}}},
{quoted: m})

await conn.sendFile(m.chat, sfiledl.result.video_hd, 'ig.mp4', 'Facebook Downloader\n© Mika Bot', m)

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