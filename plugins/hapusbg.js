
import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .removebg'
m.reply('Tunggu Sebentar...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.ibeng.tech/api/maker/rmbg?url=${url}&apikey=tamvan`)).buffer()
await conn.sendFile(m.chat, hasil, 'img.jpg', '', '2023 © Mika Bot', m)
	
}
handler.help = ['removebg']
handler.tags = ['img']
handler.command = /^(removebg)$/i
handler.diamond = true

export default handler