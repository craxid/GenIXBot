

import fb from 'api-dylux'
import fetch from 'node-fetch'
let limit = 15

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
 
if (!text) throw `✳️ Spotify Search\n\nContoh: !spotifysearch Let it Go`
m.react(rwait)

let ling = await fetch(`https://api.yanzbotz.my.id/api/cari/spotify?query=${text}`)
let hasil = await ling.json()

let detil = `
*Judul:* ${hasil.title}
*Durasi:* ${hasil.duration}
*Popularitas:* ${hasil.popularity}
*Pratinjau:* ${hasil.preview}

*URL:* ${hasil.url}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Spotify Search'),
body: hasil.name,
thumbnailUrl: global.ppmika,
sourceUrl: (`${hasil.url}`),
mediaType: 1,
renderLargerThumbnail: false
}}},
{quoted: m})
}

//await conn.sendFile(m.chat, hasil.download, (`${hasil.name} (Mika Bot).m4a`), 'spotfind Downloader\n© Mika Bot', m)

handler.help = ['spotifysearch'].map(v => v + ' <url>')
handler.tags = ['dl','prem']
handler.command = /^((spotifysearch)?)$/i
handler.diamond = false

export default handler

//https://api.yanzbotz.my.id/api/downloader/spotfind?url=https://open.hasil.com/track/4Jj3yew48NodVHWePPUGR7

//https://api.yanzbotz.my.id/api/downloader/spotfind?url=https://open.hasil.com/track/4Jj3yew48NodVHWePPUGR7
//https://api.yanzbotz.my.id/api/cari/spotfind?query=