
import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .removebg'
m.reply(wait)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await conn.getFile(`https://api.zahwazein.xyz/convert/sticker-nobg?url=${url}&apikey=zenzkey_f59c1aacf2`))

 (stiker) conn.sendFile(m.chat, hasil.data, 'sticker.webp', '', m, null, rpl)
	
}
handler.help = ['stickernobg']
handler.tags = ['sticker']
handler.command = /^(stickernobg|stikernobg|sbg|snobg)$/i
handler.diamond = 1

export default handler