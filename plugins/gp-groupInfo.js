//import db from '../lib/database.js'

let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
┌──「 *INFORMASI GRUP* 」
▢ *♻️ ID:*
• ${groupMetadata.id}
▢ *🔖 Nama* : 
• ${groupMetadata.subject}
▢ *👥 Anggota* :
• ${participants.length}
▢ *🤿 Pembuat grup:*
• @${owner.split('@')[0]}
▢ *🕵🏻‍♂️ Admin:*
${listAdmin}
▢ *🪢 Konfigurasi grup:*
• ${isBanned ? '✅' : '❎'} Banned
• ${welcome ? '✅' : '❎'} Salam selamat datang
• ${detect ? '✅' : '❎'} Detector
• ${del ? '❎' : '✅'} Anti Delete
• ${antiLink ? '✅' : '❎'} Anti Link WhatsApp

*▢  📬 Konfigurasi pesan:*
• Salam welcome: ${sWelcome}
• Salam bye: ${sBye}
• Promote: ${sPromote}
• Demote: ${sDemote}

▢ *📌 Deskripsi* :
• ${groupMetadata.desc?.toString() || 'desconocido'}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogp']
handler.tags = ['group']
handler.command = ['infogrup', 'groupinfo', 'infogp'] 
handler.group = true

export default handler
