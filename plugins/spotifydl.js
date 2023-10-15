

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

//await conn.sendFile(m.chat, spotify.result.data.metadata.download, (`${spotify.result.data.metadata.name} (Mika Bot).m4a`), 'Spotify Downloader\n© Mika Bot', m)

 }
handler.help = ['spotify'].map(v => v + ' <url>')
handler.tags = ['dl','prem']
handler.command = /^((spotify|dl)?)$/i
handler.diamond = true

export default handler

//https://api.yanzbotz.my.id/api/downloader/spotify?url=https://open.spotify.com/track/4Jj3yew48NodVHWePPUGR7

/*import fetch 'node-fetch'

let handler = async (m, { conn, command, usedPrefix, text }) => {
  if (!text) throw `Ketik ${usedPrefix + command} judul lagu dan penyanyinya 

Contoh : ${usedPrefix + command} oh asmara kobo kanaeru`
   await m.reply('Tunggu bentar...')
  const response = await fetch(`https://myvin.me/spotify/play?q=${text}`)
  if (!response.ok) throw `Gagal memanggil API: ${response.statusText}`

  const buffer = await response.buffer()
  conn.sendFile(m.chat, buffer, 'audio.mp3', '', m, 0, { mimetype: 'audio/mp4' })
}

handler.help = ['spotify']
handler.command = ['spotify']
handler.tags = ['dl']
handler.diamond = true

export default handler*/