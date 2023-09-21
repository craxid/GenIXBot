import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import fetch from 'nodetech'

let handler = async (m, { conn, text, usedPrefix }) => {
 try {
  let teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
  let teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
  
//atas = text.split('|')[0] ? text.split('|')[0] : '-'
//bawah = text.split('|')[1] ? text.split('|')[1] : '-'
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  
 let memeq = `https://api.zahwazein.xyz/creator/smeme?text=${encodeURIComponent(teks1)}&text2=${encodeURIComponent(teks1)}&url=${url}&apikey=zenzkey_f59c1aacf2`
  
//  let wasted = `http://docs-jojo.herokuapp.com/api/meme-gen?top=${teks}&bottom=${teks2}&img=${url}`
  let memeg = await sticker(null, memeq)
  
  conn.sendFile(m.chat, memeg, 'meme.png', '', m)
 } catch (e) {
   m.reply(`Masukan format!!\nReply image dengan caption ${usedPrefix}smeme teks1|teks2\n*Jangan reply sticker*`)
  }
}
handler.help = ['mememaker']
handler.tags = ['sticker']
handler.command = /^mememaker$/i
handler.diamond = false
handler.fail = null

export default handler

  //let wasted = `https://api.memegen.link/images/custom/${encodeURIComponent(teks1)}/${encodeURIComponent(teks2)}.png?background=${url}`