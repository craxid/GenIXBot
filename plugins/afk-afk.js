//import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
  😴 *AFK* 
Sekarang Kamu AFK sampai Kamu mengirim pesan 
▢ *User:* ${conn.getName(m.sender)} 
▢ *Alasan:* ${text ? text : ''}
  `)
}
handler.help = ['afk <Alasan>']
handler.tags = ['fun']
handler.command = ['afk']
handler.group = true

export default handler
