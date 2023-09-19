import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: pm2 restart index.js --cron "0 * * * *"'
    if (conn.user.jid == conn.user.jid) {
    await m.reply('🔄 Memulai ulang Bot...\n tunggu bentar...')
    process.send('reset')
  } else throw 'eh'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart'] 
handler.rowner = true

export default handler
