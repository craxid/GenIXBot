
import fetch from 'node-fetch'

let timeout = 180000
let exp = 200
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (id in conn.tebakkata) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkata[id][0])
        throw false
    }
   let src = await (await fetch('https://api.zahwazein.xyz/entertainment/family100?apikey=zenzkey_f59c1aacf2')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teka untuk bantuan
Bonus: ${exp} XP

`.trim()
    conn.tebakkata[id] = [
        await conn.reply(m.chat, caption, m),
        json, exp,
        setTimeout(() => {
            if (conn.tebakkata[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakkata[id][0])
            delete conn.tebakkata[id]
        }, timeout)
    ]
}
handler.help = ['fam100']
handler.command = /^fam100/i
handler.diamond = false
handler.rowner = true

export default handler