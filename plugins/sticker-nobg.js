
import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .snobg'
m.reply(wait)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await conn.getFile(`https://api.zahwazein.xyz/convert/sticker-nobg?url=${url}&apikey=zenzkey_f59c1aacf2`))

let stiker = await sticker(null, hasil, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
//await conn.sendFile(m.chat, hasil.data, 'img.webp', 'Sticker No bg\n© Mika Bot', m)
	
}
handler.help = ['snobg']
handler.tags = ['img']
handler.command = /^(snobg|stickernobg)$/i
handler.diamond = true

export default handler