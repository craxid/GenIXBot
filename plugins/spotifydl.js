

import fb from 'api-dylux'
import fetch from 'node-fetch'
let limit = 15

let handler = async (m, { conn, text, args, usedPrefix, command }) => {

 
if (!args[0]) throw `✳️ Spotify Downloader\n\nContoh: !spotify https://open.spotify.com/track/4Jj3yew48NodVHWePPUGR7`
 
let ling = await fetch(`https://api.yanzbotz.my.id/api/downloader/spotify?url=${args[0]}`)
let fbdl = await ling.json()

let detil = `
*Artis:* ${fbdl.result.data.metadata.artist}
*Judul:* ${fbdl.result.data.metadata.name}
*Album:* ${fbdl.result.data.metadata.album}

_Sedang mengirim..._
`
let detil2 = `
*Deskripsi:* ${fbdl.result.desc}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Facebook Downloader'),
body: global.namebot,
thumbnailUrl: (`${fbdl.result.data.metadata.image}`),
sourceUrl: (`${fbdl.result.data.metadata.weburl}`),
mediaType: 1,
renderLargerThumbnail: true
}}},
{quoted: m})

await conn.sendFile(m.chat, fbdl.result.video_hd, 'Spotify', 'Spotify Downloader\n© Mika Bot', m)

 }
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((spotify|dl)?)$/i
handler.diamond = true

export default handler

//https://api.yanzbotz.my.id/api/downloader/spotify?url=https://open.spotify.com/track/4Jj3yew48NodVHWePPUGR7