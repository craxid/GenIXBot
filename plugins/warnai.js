
import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .warnai'
m.reply(wait)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await conn.getFile(`https://vihangayt.me/tools/toanime?url=${url}`))

await conn.sendFile(m.chat, hasil.data, 'img.jpg', '\n© Mika Bot', m)
	
}

handler.help = ['warnai', 'colorizer']
handler.tags = ['ai']
handler.command = /^(warnai|colorize|colorizer)$/i
handler.diamond = 3

export default handler