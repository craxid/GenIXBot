import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
	try {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    //if (!/video|audio/.test(mime)) throw `✳️ ${msg.toavT()} :\n *${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw '❎ kesalahan mengunduh media'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw '❎ Kesalahan saat mengkonversi'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, { mimetype: 'audio/mp4' })
    } catch (e) {
        m.reply(`✳️ Balas audio untuk mengkonversinya menjadi voice note dengan perintah :\n *${usedPrefix + command}*`)
   }
}
handler.help = ['tovn']
handler.tags = ['fun']
handler.command = ['vn', 'tovn'] 

export default handler
