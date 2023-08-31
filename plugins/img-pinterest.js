import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
    m.react(rwait)
  if (!text) throw `✳️ Gambar apa yang ingin kamu cari?\n\n📌 Contoh  : ${usedPrefix + command} Akebi Komichi`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*▢  Pinterest:*  ${text}
`.trim(), m)
m.react(animoji)
}
handler.help = ['pinterest']
handler.tags = ['img']
handler.command = ['pinterest','pin'] 

export default handler
