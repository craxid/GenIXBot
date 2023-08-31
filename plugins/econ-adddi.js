//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ Tag targetnya'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ Masukan jumlah *Diamond* '
    if (isNaN(txt)) throw '🔢 Hanya angka'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '✳️ Mínimal  *1*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`≡ *💎 Ditambahkan*
┌──────────────
▢ *Total:* ${dmt}
└──────────────`)
   conn.fakeReply(m.chat, `▢ Menerima \n\n *+${dmt}* Diamond`, who, m.text)
}

handler.help = ['adddm <@user>']
handler.tags = ['econ']
handler.command = ['adddm', 'dm'] 
handler.rowner = true

export default handler

