

import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadianime'
m.reply(wait)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await conn.getFile(`https://vihangayt.me/tools/toanime?url=${url}`)

conn.sendFile(m.chat, hasil.data, 'jadianime.jpg', (`${global.wm2}`), m)
	
}
handler.help = ['jadianime']
handler.tags = ['ai']
handler.command = /^(jadianime)$/i
handler.diamond = 3

export default handler