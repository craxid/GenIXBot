

import fetch from "node-fetch"
let limit = 15

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan URL!\n\nContoh: ${usedPrefix + command} https://www.instagram.com`
  await m.reply(wait)
  
  let idgl = await fetch(`https://vihangayt.me/download/instagram2?url=${text}`)
  let res = await idgl.json()
  
  conn.sendMessage(m.chat, res.data.url, 'ig.mp4', 'Done kak!', m)
}

handler.help = ['ig']
handler.tags = ['dl']
handler.command = /^(ig(dl)?)|(instagram(dl)?)$/i
handler.register = true
handler.diamond = true

export default handler