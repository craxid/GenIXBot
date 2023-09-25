
import fg from 'api-dylux'

let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `✳️ Masukan kueri untuk mencari gambar \n\n📌 Contoh: *${usedPrefix + command}* Misono Mika`
  
  
  let res = await fetch(`https://api.yanzbotz.my.id/api/cari/pixiv?query=${text}`)
  
  let pixiv = res.json()
  
  let piksif `
  title: ${piksif.result.title}
  type: ${piksif.result.type}
  ID: ${piksif.result.user.id}
  
  `
  
conn.sendMessage(m.chat, {
text: piksif,
contextInfo: {
externalAdReply: {
title: (`${username}`),
body: ('Pixiv Downloader'),
thumbnailUrl: (`${piksif.result.image.urls.large}`),
sourceUrl: ('https://www.facebook.com/dede2015k'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
  
  //conn.sendFile(m.chat, res.getRandom(), 'img.png', `
✅ Hasil untuk: *${text}*`.trim(), m)
}
handler.help = ['pixiv']
handler.tags = ['img']
handler.command = /^(poxiv)$/i
handler.limit = true

export default handler
