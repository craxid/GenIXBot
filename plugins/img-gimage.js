
import fg from 'api-dylux'
let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `✳️ Masukan kueri untuk mencari gambar \n\n📌 Contoh: *${usedPrefix + command}* Akebi Komichi`
  let res = await fg.googleImage(text)
  conn.sendFile(m.chat, res.getRandom(), 'img.png', `
✅ Hasil untuk: *${text}*`.trim(), m)
}
handler.help = ['image']
handler.tags = ['img']
handler.command = /^(img|image|gimage|imagen)$/i
handler.diamond = true

export default handler
