
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix }) => {
 try {
  let teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
  let teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
  
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  
 let memeq = await conn.getFile(`https://api.zahwazein.xyz/creator/smeme?text=${encodeURIComponent(teks1)}&text2=${encodeURIComponent(teks2)}&url=${url}&apikey=zenzkey_f59c1aacf2`)
  
  conn.sendFile(m.chat, memeq.data, 'meme_picture.jpg', '', m)
  
 } catch (e) {
   m.reply(`Reply gambar dengan caption ${usedPrefix}meme teks1|teks2\n*Jangan reply sticker*`)
  }
}
handler.help = ['meme','mememaker']
handler.tags = ['img']
handler.command = /^((meme)?maker|memeq)$/i
handler.diamond = false

export default handler
