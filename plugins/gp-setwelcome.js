//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ Pesan selamat datang sudah diatur')
  } else throw `✳️ Masukan pesan selamat datang\n\n@user (mention)\n@group (Nama grup)\n@desc (deskripsi grup)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
handler.owner = false

export default handler
