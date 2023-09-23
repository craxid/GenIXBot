
import uploadImage from '../lib/uploadImage'
import makemeazombie from 'makemeazombie'

let zombie = new makemeazombie()

async function handler(m, { conn }) {
var q = m.quoted ? m.quoted : m
var mime = (q.msg || q).mimetype || ''
if (!mime) {
 return m.reply('Kirim/Balas gambar dengan caption *.jadizombie*')
 }
var media = await q.download()
var gambar = await uploadImage(media)
zombie.transform({
    photo: `${gambar}`,
    destinyFolder: './tmp'
})
.then(data => {
    conn.sendFile(m.chat, data, 'zombie.jpg', wm, m)
})
 .catch(err => {
    console.log('Terjadi kesalahan:', err)
 })
}

handler.command = handler.help = ['jadizombie']
handler.tags = ['maker']

module.exports = handler