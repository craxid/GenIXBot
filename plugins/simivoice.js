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
  const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "text": res.success,
    "voice": id
})
conn.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})
        return !0
    }
    return true
}

handler.help = ['simiv','simivoice']
handler.tags = [fu]
export default handler