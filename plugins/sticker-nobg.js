import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@whiskeysockets/baileys'
const effects = ['jail', 'gay', 'glass', 'wasted' ,'triggered', 'lolice', 'simpcard', 'horny']

let handler = async (m, { conn, usedPrefix, text, command }) => {
    
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `

📌 *Contoh:* 
${usedPrefix + command}snobg 
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '✳️ Balas sebuah gambar'
if (!/image\/(jpe?g|png)/.test(mime)) throw `✳️ Format tidak didukung`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = conn.getFile(`https://api.zahwazein.xyz/convert/sticker-nobg?url=${encodeURIComponent(url)}`, {
avatar: url
})
try {
let stiker = await sticker(null, apiUrl, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
} catch (e) {
m.reply('Error saat mengkonversi stiker, file terlalu besar')
await conn.sendFile(m.chat, apiUrl, 'snobg.png', null, m)
}}
handler.help = ['snobg']
handler.tags = ['sticker']
handler.command = ['snobg', 'sbg', 'stickernobg'] 
handler.diamond = true

export default handler
