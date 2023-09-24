
/*
import fetch from "node-fetch"
let limit = 15

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan URL!\n\nContoh: ${usedPrefix + command} https://www.instagram.com`
  await m.reply(wait)
  
  let idgl2 = await fetch(`https://vihangayt.me/download/instagram?url=${text}`)
  let res = await idgl2.json()
  
  conn.sendFile(m.chat, res.data.data.url, 'ig.jpg', 'Instagram Downloader\n© Mika Bot', m)
}

handler.help = ['igpic','igimg']
handler.tags = ['dl']
handler.command = /^(igpic|igimg)$/i
handler.register = true
handler.diamond = true

export default handler

//https://vihangayt.me/download/instagram?url=
