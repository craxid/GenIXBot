
import fetch from 'node-fetch'

export async function before(m, { conn }) {

if (m.isBaileys && m.fromMe)
        return !1

if (!m.isGroup) return !1
    let user = global.db.data.users[m.sender]
    
if (!user.chatbot)
return !1

let mika = await fetch(`https://api.zahwazein.xyz/entertainment/simisimi?text=${m.text}&apikey=zenzkey_f59c1aacf2`)

let res = await mika.json()

m.reply(res.result.message.replace('darling','Sensei').replace('dear','Sensei').replace('dearest','Sensei').replace('sayang','Sensei').replace('Anda','Sensei').replace('Hey there','Hey Sensei').replace('Hi there','Hi Sensei').replace('Hello there', 'Hello Sensei').replace('Anda','Kamu').replace('simisimi','Mika').replace('enter text params','aku gak bisa bales setiker kak'))
}

//let mika = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?id=id3xBWK9-mcu8Y8JOQjbKzzAmOzgGgmp8HomTp-UOq8&query=${m.text}`)