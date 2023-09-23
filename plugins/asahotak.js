
import fetch from 'node-fetch'

let timeout = 180000
let exp = 200
let handler = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.asahotak[id][0])
        throw false
    }
let src = await (await fetch('https://api.zahwazein.xyz/entertainment/asahotak?apikey=zenzkey_f59c1aacf2')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.result.soal}

Waktu *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}ao untuk bantuan
Hadiah: ${exp} XP
`.trim()
    conn.asahotak[id] = [
        await conn.reply(m.chat, caption, m),
        json, exp,
        setTimeout(() => {
            if (conn.asahotak[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i
handler.diamond = false
handler.group = true
handler.register = true

export default handler