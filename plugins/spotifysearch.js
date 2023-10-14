

import fb from 'api-dylux'
import fetch from 'node-fetch'
let limit = 15

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
 
if (!text) throw `✳️ Spotify Search\n\nContoh: !spotifysearch Let it Go`
m.react(rwait)

let ling = await fetch(`https://api.yanzbotz.my.id/api/cari/spotify?query=${text}`)

if (spotfind && hasil.result.length > 0) {
const hasil = hasil.result[0];

let detil = `
*Judul:* ${hasil.result.data.title}
*Durasi:* ${hasil.result.data.duration}
*Popularitas:* ${hasil.result.data.popularity}
*Pratinjau:* ${hasil.result.data.preview}

*URL:* ${hasil.result.data.url}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Spotify Search'),
body: hasil.result.data.name,
thumbnailUrl: global.ppmika,
sourceUrl: (`${hasil.result.data.url}`),
mediaType: 1,
renderLargerThumbnail: false
}}},
{quoted: m})
}

//await conn.sendFile(m.chat, hasil.result.data.download, (`${hasil.result.data.name} (Mika Bot).m4a`), 'spotfind Downloader\n© Mika Bot', m)

 }
handler.help = ['spotifysearch'].map(v => v + ' <url>')
handler.tags = ['dl','prem']
handler.command = /^((spotifysearch)?)$/i
handler.diamond = false

export default handler

//https://api.yanzbotz.my.id/api/downloader/spotfind?url=https://open.hasil.com/track/4Jj3yew48NodVHWePPUGR7

//https://api.yanzbotz.my.id/api/downloader/spotfind?url=https://open.hasil.com/track/4Jj3yew48NodVHWePPUGR7
//https://api.yanzbotz.my.id/api/cari/spotfind?query=