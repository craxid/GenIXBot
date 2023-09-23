
import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'
import { jadianime } from '..lib/jadianime.js'
let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadianime'
m.reply(wait)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await jadianime(url)
await conn.sendFile(m.chat, hasil, 'jadianime.jpg', global.wm2, m)
	
}
handler.help = ['jadianime']
handler.tags = ['ai']
handler.command = /^(jadianime)$/i
handler.limit = 5

export default handler