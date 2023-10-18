
import fetch from 'node-fetch'

export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0
        
    //if (!m.isGroup) return !1
    
    let user = global.db.data.users[m.sender]
    
      if (!user.chatbot)
        return !0

let nama = conn.getName(m.sender) 
       
let cetbot = await fetch(`https://tools.reversery.com/ai/ai.?text=${m.text}&name=${detail}`)
        
        let res = await cetbot.json()
        
//await m.reply(res.result)

conn.sendMessage(m.chat, {text: res.result,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
    "externalAdReply": {
        "title": global.botname,
        "body": nama,
        "mediaType": 1,
        "sourceUrl": global.fgig,
        "thumbnailUrl": global.ppmika,
        "renderLargerThumbnail": false
    }}}, 
    {quoted: m})
    
}