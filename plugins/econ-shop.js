//import db from '../lib/database.js'

const xpperdiamond = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperdiamond) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperdiamond * count) {
    global.db.data.users[m.sender].exp -= xpperdiamond * count
    global.db.data.users[m.sender].diamond += count
    conn.reply(m.chat, `
┌─「 *NOTA PEMBELIAN* 」
‣ *Jumlah:* + ${count}💎 
‣ *Harga:* -${xpperdiamond * count} XP
└──────────────`, m)
  } else conn.reply(m.chat, `❎ Maaf, Kamu tidak memiliki *XP* untuk membeli *${count}* Diamond 💎\n\nKamu bisa mendapatkan *XP* menggunakan perintah di Menu *Game & Ekonomi*`, m)
}
handler.help = ['buy', 'buyall']
handler.tags = ['econ']
handler.command = ['buy', 'buyall'] 

handler.disabled = false

export default handler
