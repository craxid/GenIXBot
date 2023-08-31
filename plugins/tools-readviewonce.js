
let { downloadContentFromMessage } = (await import('@adiwajshing/baileys'));

let handler = async (m, { conn }) => {
    if (!m.quoted) throw '✳️ Balas pesan sekali lihat!'
    if (m.quoted.mtype !== 'viewOnceMessageV2') throw '✳️ Chat ini bukan Pesan Sekali Lihat'
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}

handler.help = ['revive']
handler.tags = ['tools']
handler.command = ['readviewonce', 'read', 'revive', 'pulihkan'] 

export default handler
