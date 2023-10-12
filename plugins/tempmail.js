
import fb from 'api-dylux'
import fetch from 'node-fetch'
let limit = 15

let handler = async (m, { conn, text, args, usedPrefix, command }) => {

 
if (!args[0]) throw `✳️ Temporary Mail`
 
let ling = await fetch(`https://vihangayt.me/tools/tempmail`)
let tmpmail = await ling.json()

let detil = `
*Data:* ${tmpmail.data}

_Sedang mengirim..._
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Facebook Downloader'),
body: global.namebot,
thumbnailUrl: global.ppmika,
sourceUrl: global.fbku,
mediaType: 1,
renderLargerThumbnail: true
}}},
{quoted: m})

await conn.sendFile(m.chat, tmpmail.result.video_hd, 'fesbuk.mp4', 'Facebook Downloader\n© Mika Bot', m)

 }
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.diamond = true

export default handler
