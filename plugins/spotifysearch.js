

import fb from 'api-dylux'
import fetch from 'node-fetch'
let limit = 15

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
 
if (!text) throw `✳️ Spotify Downloader\n\nContoh: !spotify https://open.spotify.com/track/4Jj3yew48NodVHWePPUGR7`
m.react(rwait)

let ling = await fetch(`https://api.yanzbotz.my.id/api/cari/spotify?query=${text}`)
let spotify = await ling.json()

let detil = `
*Judul:* ${spotify.result.data.artist}
*Durasi:* ${spotify.result.data.title}
*Popularitas:* ${spotify.result.data.popularity}
*Pratinjau:* ${spotify.result.data.preview}

*URL:* ${spotify.result.data.url}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Spotify Search'),
body: spotify.result.data.name,
thumbnailUrl: global.ppmika,
sourceUrl: (`${spotify.result.data.url}`),
mediaType: 1,
renderLargerThumbnail: false
}}},
{quoted: m})

//await conn.sendFile(m.chat, spotify.result.data.download, (`${spotify.result.data.name} (Mika Bot).m4a`), 'Spotify Downloader\n© Mika Bot', m)

 }
handler.help = ['spotifysearch'].map(v => v + ' <url>')
handler.tags = ['dl','prem']
handler.command = /^((spotifysearch)?)$/i
handler.diamond = true

export default handler

//https://api.yanzbotz.my.id/api/downloader/spotify?url=https://open.spotify.com/track/4Jj3yew48NodVHWePPUGR7

//https://api.yanzbotz.my.id/api/downloader/spotify?url=https://open.spotify.com/track/4Jj3yew48NodVHWePPUGR7
//https://api.yanzbotz.my.id/api/cari/spotify?query=