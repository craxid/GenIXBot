//import db from '../lib/database.js'

import { createHash } from 'crypto'
let handler = async function (m, { conn, args, usedPrefix}) {
  if (!args[0]) throw `✳️ *Masukan nomor dan nomor seri*\nPeriksa nomor serimu dengan perintah...\n\n*${usedPrefix}mysn*`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '⚠️ *Nomor seri tidak sah*'
  user.registered = false
  m.reply(`✅ Berhasil menghapus user dari database`)
}
handler.help = ['unreg <nomor seri>'] 
handler.tags = ['rg']

handler.command = ['unreg'] 
handler.register = true

export default handler

