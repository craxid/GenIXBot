
import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'
import { jadianime } from '../lib/jadianime.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadianime'
m.reply('Tunggu Sebentar...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://phototoanime.p.rapidapi.com/draw?rapidapi-key=553e4784d3msh29ae65eb1df940bp158d54jsnc55b268d0b6b&url=${url}`)).buffer()
await conn.sendFile(m.chat, hasil, '', wm, m)
	
}
handler.help = ['jadianime']
handler.tags = ['maker']
handler.command = /^(jadianime)$/i
handler.diamond = 4

export default handler