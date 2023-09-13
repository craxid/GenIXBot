//import db from '../lib/database.js'

/*import { execSync } from 'child_process'
let handler = async (m, { conn, text }) => {
if (conn.user.jid == conn.user.jid) {
let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
//require('fs').readdirSync('plugins').map(v=>global.reload('', v))
conn.reply(m.chat, stdout.toString(), m)
}}
handler.help = ['update']
handler.tags = ['owner']
handler.command = ['update', 'perbarui', 'fix', 'fixed'] 
handler.rowner = true

export default handler
*/

import { execSync } from 'child_process'

let handler = async (m, { conn, text, isROwner }) => {
  if (global.conn.user.jid == conn.user.jid) {
    let stdout = execSync('git remote set-url origin https://github.com/craxix/genixbot.git && git pull' + (isROwner && text ? ' ' + text : ''))
    if (isROwner) require('fs').readdirSync('plugins').map(v => global.reload('', v))
    m.reply(stdout.toString())
  }
}
handler.help = ['update']
handler.tags = ['owner']
handler.command = /^update$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler