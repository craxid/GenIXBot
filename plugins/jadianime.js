
import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'
import jadiAnime from '@saipulanuar/'
let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadianime'
m.reply('Tunggu Sebentar...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await jadiAnime(url)
await conn.sendFile(m.chat, hasil, '', global.wm2, m)
	
}
handler.help = ['jadianime']
handler.tags = ['ai']
handler.command = /^(jadianime)$/i
handler.limit = 5

export default handler