
import fetch from "node-fetch"
let limit = 15

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan URL!\n\nContoh: ${usedPrefix + command} https://www.instagram.com`
  await m.reply(wait)
  
  let idgl = await fetch(`https://api.arifzyn.xyz/download/instagram?url=${text}`)
  let res = await idgl.json()
  
  conn.sendFile(m.chat, res.result.media, 'ig.mp4', 'Instagram Downloader\n© Mika Bot', m)
}

handler.help = ['igdl']
handler.tags = ['dl']
handler.command = /^(ig(dl)?)|(instagram(dl)|igvid?)$/i
handler.register = false
handler.diamond = true

export default handler

//https://vihangayt.me/download/instagram?url=