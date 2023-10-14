

import fb from 'api-dylux'
import fetch from 'node-fetch'
let limit = 15

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
 
if (!text) throw `✳️ Spotify Search\n\nContoh: !spotify Let it Go`
m.react(rwait)

let ling = await fetch(`https://api.yanzbotz.my.id/api/cari/spotify?query=${text}`)
let spotfind = await ling.json()

let detil = `
*Judul:* ${spotfind.result.data.artist}
*Durasi:* ${spotfind.result.data.title}
*Popularitas:* ${spotfind.result.data.popularity}
*Pratinjau:* ${spotfind.result.data.preview}

*URL:* ${spotfind.result.data.url}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Spotify Search'),
body: spotfind.result.data.name,
thumbnailUrl: global.ppmika,
sourceUrl: (`${spotfind.result.data.url}`),
mediaType: 1,
renderLargerThumbnail: false
}}},
{quoted: m})

//await conn.sendFile(m.chat, spotfind.result.data.download, (`${spotfind.result.data.name} (Mika Bot).m4a`), 'spotfind Downloader\n© Mika Bot', m)

 }
handler.help = ['spotifysearch'].map(v => v + ' <url>')
handler.tags = ['dl','prem']
handler.command = /^((spotifysearch)?)$/i
handler.diamond = false

export default handler

//https://api.yanzbotz.my.id/api/downloader/spotfind?url=https://open.spotfind.com/track/4Jj3yew48NodVHWePPUGR7

//https://api.yanzbotz.my.id/api/downloader/spotfind?url=https://open.spotfind.com/track/4Jj3yew48NodVHWePPUGR7
//https://api.yanzbotz.my.id/api/cari/spotfind?query=