
import fetch from 'node-fetch'

let timeout = 120000
let exp = 200
let src
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
  let id = m.chat
  if (id in conn.tebakgambar) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgambar[id][0])
    throw false
  }
  if (!src) src = await fetch('https://api.zahwazein.xyz/entertainment/tebakgambar?apikey=zenzkey_f59c1aacf2')
  
  
  let json = src[Math.floor(Math.random() * src.length)]
  if (!json) throw json
  let caption = `
Deskripsi: *${json.deskripsi}*

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tebar untuk bantuan
Bonus: ${exp} XP
    `.trim()
  conn.tebakgambar[id] = [
    await conn.sendMessage(m.chat, { image: { url: json.img }, caption: caption, footer: global.wm2 }, { quoted: m }),
    json, exp,
    setTimeout(() => {
      if (conn.tebakgambar[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakgambar[id][0])
      delete conn.tebakgambar[id]
    }, timeout)
  ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i

export default handler