
import uploadImage from '../lib/uploadImage.js'
import sticker from '...'
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
  
 let smeme = await conn.getFile(`https://api.zahwazein.xyz/creator/smeme?text=${encodeURIComponent(teks1)}&text2=${encodeURIComponent(teks2)}&url=${url}&apikey=zenzkey_f59c1aacf2`)
  
  conn.sendFile(m.chat, sticker, smeme.data, 'meme_picture.webp', '', m)
  
 } catch (e) {
   m.reply(`Reply gambar dengan caption ${usedPrefix}mememaker teks atas|teks bawah\n*Jangan reply sticker*`)
  }
}
handler.help = ['smeme']
handler.tags = ['sticker']
handler.command = /^(smeme)$/i
handler.diamond = false

export default handler
