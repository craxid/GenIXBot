
/*import fetch from 'node-fetch'
let handler = async (m, { text }) => {

if (!text) throw `✳️ Masukkan Teks\n\nContoh: !simivoice Hai`
m.react(rwait)

try {
let simiv = await conn.getFile(`https://api.yanzbotz.my.id/api/tts/aoi?query=${text}`)

await m.reply(simiv.data)

m.react(done)
}
catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
}
handler.help = ['voice', 'simiv'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^(voice|simiv)$/i

export default handler
*/

import fetch from 'node-fetch'
import axios from 'axios'
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simivoice && !chat.isBanned ) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let api = await fetch(`https://api.simsimi.net/v2/?text=${m.text}&lc=id`)
  let res = await api.json()
  
  let id = 'id_001'
  const { data } = await axios.post("https://api.yanzbotz.my.id/api/tts/aoi?query=${text}", {
    "text": res.success,
    "voice": id
})
conn.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})
        return !0
    }
    return true
}

handler.help = ['simiv','simivoice']
handler.tags = ['fun']
handler.command = ['simiv','simivoice']

export default handler