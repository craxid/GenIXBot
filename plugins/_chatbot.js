
import fetch from 'node-fetch'

export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0

if (!m.isGroup) return !1
    let user = global.db.data.users[m.sender]
    
if (!user.chatbot)
return !0
let mika = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?id=UGiJxTlsUMl802QN8K5k0IJ7xzNMSDpxQfARcM3Fu8Y&query=${m.text}`)
        
let res = await mika.json()
if (mik)
m.reply(res.result)
}
