
import { toanime } from 'betabotz-tools'
import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadianime'
m.reply(wait)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await toanime(url)

await conn.sendFile(m.chat, hasil.image_data, 'img.jpg', 'Foto ke Anime\n© Mika Bot', m)
	
}

handler.help = ['jadianime']
handler.tags = ['ai']
handler.command = /^(jadianime)$/i
handler.diamond = 3

export default handler