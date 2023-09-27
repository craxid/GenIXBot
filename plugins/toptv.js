import {
    generateWAMessageContent
} from "@adiwajshing/baileys"
let handler = async (m, {
    conn,
    usedPrefix,
    command
}) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/webp|image|video|gif|viewOnce/g.test(mime)) return m.reply(`Reply Media dengan perintah\n\n${usedPrefix + command}`)
    let media = await q.download()
    let msg = await generateWAMessageContent({
        video: media
    }, {
        upload: conn.waUploadToServer
    })
    await conn.relayMessage(m.chat, {
        ptvMessage: msg.videoMessage
    }, {
        quoted: m
    })
}
handler.help = ['toptv (reply)']
handler.tags = ['tools']
handler.command = /^(toptv)/i
export default handler