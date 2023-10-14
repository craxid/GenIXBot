

import fb from 'api-dylux'
import fetch from 'node-fetch'
let limit = 15

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
 
if (!args[0]) throw `✳️ Spotify Downloader\n\nContoh: !spotify https://open.spotify.com/track/4Jj3yew48NodVHWePPUGR7`
m.react(rwait)

let ling = await fetch(`https://api.yanzbotz.my.id/api/downloader/spotify?url=${args[0]}`)
let spotify = await ling.json()

let detil = `
*Artis:* ${spotify.result.data.metadata.artist}
*Judul:* ${spotify.result.data.metadata.name}
*Album:* ${spotify.result.data.metadata.album}

_Sedang mengirim..._
`
let detil2 = `
*Artis:* ${spotify.result.data.metadata.artist}
*Judul:* ${spotify.result.data.metadata.name}
*Album:* ${spotify.result.data.metadata.album}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Spotify Downloader'),
body: spotify.result.data.metadata.name,
thumbnailUrl: (`${spotify.result.data.metadata.image}`),
sourceUrl: (`${spotify.result.data.metadata.weburl}`),
mediaType: 1,
renderLargerThumbnail: false
}}},
{quoted: m})

await conn.sendFile(m.chat, spotify.result.data.metadata.download, (`${spotify.result.data.metadata.name}(Mika Bot).mp3`), 'Spotify Downloader\n© Mika Bot', m)

 }
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((spotify|dl)?)$/i
handler.diamond = true

export default handler

//https://api.yanzbotz.my.id/api/downloader/spotify?url=https://open.spotify.com/track/4Jj3yew48NodVHWePPUGR7