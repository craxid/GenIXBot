
import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadianime'
m.reply('Tunggu Sebentar...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://vihangayt.me/tools/toanime?url=${url}`)).buffer()
await conn.sendFile(m.chat, hasil, 'jadianime.jpg', ${global.wm2}, m)
	
}
handler.help = ['jadianime']
handler.tags = ['ai']
handler.command = /^(jadianime)$/i
handler.diamond = 3

export default handler