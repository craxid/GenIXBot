
import { fnctions } from "../lib/fnctions"

let handler = async (m, { conn, text, command, usedPrefix, isOwner }) => {
  if (!await fnctions()) return;
  let image = 'https://telegra.ph/file/e7e06f759a0549bff9a64.jpg'
  let caption = ''
  let changelogs = global.db.data.changelog || []
  
  switch (command) {
    case 'changelog':
    case 'log':
      if (!changelogs.length) return conn.reply(m.chat, 'Tidak ada changelog yang tersedia.', m)
      caption = changelogs.map(changelog => {
        let [date, ...items] = changelog.split(' - ')
        return `• ${date}\n${items.map(item => `◦ ${item}`).join('\n')}`
      }).join('\n\n')
      conn.sendFile(m.chat, image, 'changelog.jpg', caption, m)
      break
      
    case 'addchangelog':
    ca
      if (!isOwner) return conn.reply(m.chat, 'Perintah ini hanya dapat digunakan oleh *Owner*!', m)
      if (!text) return conn.reply(m.chat, `Contoh: ${usedPrefix}addchangelog <text>`, m)
      changelogs.unshift(`${new Date().toDateString()} - ${text}`)
      global.db.data.changelog = changelogs
      conn.reply(m.chat, 'Changelog berhasil di tambahkan.', m)
      break
      
    case 'rchangelog':
      if (!isOwner) return conn.reply(m.chat, 'Perintah ini hanya dapat digunakan oleh *Owner*!', m)
      if (!text) return conn.reply(m.chat, `Contoh: ${usedPrefix}rchangelog <text>`, m)
      let index = changelogs.findIndex(changelog => changelog.includes(text))
      if (index === -1) return conn.reply(m.chat, 'Changelog tidak di temukan.', m)
      changelogs.splice(index, 1)
      global.db.data.changelog = changelogs
      conn.reply(m.chat, 'Changelog berhasil di hapus.', m)
      break
  }
}

handler.help = ['changelog', 'log', 'addchangelog <text>', 'rchangelog <text>']
handler.tags = ['owner']
handler.premium = false

handler.command = /^(changelog|log|addchangelog|rchangelog|addcl)$/i
handler.owner = false

export default handler