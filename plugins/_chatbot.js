
import fetch from 'node-fetch'

export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0

if (!m.isGroup) return !1
    let user = global.db.data.users[m.sender]
    
if (!user.chatbot)
return !0

let mika = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${m.text}&name=Misono%20Mika`)

let res = await mika.json()

m.reply(res.result.replace('darling','dear','dearest').replace('Darling','Dear','Dearest').replace('Sensei'))
}

//let mika = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?id=id3xBWK9-mcu8Y8JOQjbKzzAmOzgGgmp8HomTp-UOq8&query=${m.text}`)