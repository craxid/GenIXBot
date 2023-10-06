/*
import uploadImage from '../lib/uploadImage.js'
import { toanime } from 'betabotz-tools'

let zombie = new makemeazombie()

async function handler(m, { conn }) {
    
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
await m.reply(wait)

if (!mime) {
 return m.reply('Kirim/Balas gambar dengan caption *.jadianime2*')

 }
let media = await q.download()
let gambar = await uploadImage(media)
zombie.transform({ photo: `${gambar}`, destinyFolder: './tmp'
})
.then(data => {
    conn.sendFile(m.chat, data, 'zombie.jpg', `© Mika Bot`, m)
})
 .catch(err => {
    console.log('Terjadi kesalahan:', err)
 })
}

handler.command = ['jadianime2']
handler.help = ['jadianime2']
handler.tags = ['ai']
handler.diamond = 3

export default handler
*/

import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadianime'
m.reply('Tunggu Sebentar...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await toanime(url)

await conn.sendFile(m.chat, hasil.image_data, '', global.namebot, m)
	
}
handler.help = ['jadianime2']
handler.tags = ['maker']
handler.command = /^(jadianime2)$/i
handler.diamond = true
handler.rowner = true
export default handler
