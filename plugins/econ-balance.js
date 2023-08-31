
let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ Pengguna tidak ada di database`
    conn.reply(m.chat, `
┌───⊷ *BALANCE* ⊶
▢ *📌 Nama*: _@${who.split('@')[0]}_
▢ *💎 Diamond*: _${user.diamond}_
▢ *⬆️ XP*: _Total ${user.exp}_
└──────────────

*Catatan:* 
Kamu bisa beli 💎 diamond dengan perintah
❏ *${usedPrefix}buy <jumlah>*
❏ *${usedPrefix}buyall*`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['dm', 'berlian', 'diamond', 'balance'] 

export default handler
