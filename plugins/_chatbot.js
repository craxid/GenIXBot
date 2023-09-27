/*
import fetch from 'node-fetch'

export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let user = global.db.data.users[m.sender]
    
      if (!user.chatbot)
        return !0
        let api = await fetch(`https://api.azz.biz.id/api/alicia?q=${text}&user=Mika%20Bot&key=mangea`)
        let res = await api.json()
        m.reply(res.respon.replace('alicia','Mika Bot'))
    
}
*/

import fetch from 'node-fetch'

export async function before(m, { conn }) {

if (m.isBaileys && m.fromMe)
        return !0

if (!m.isGroup) return !0
    let user = global.db.data.users[m.sender]
    
if (!user.chatbot)
return !0

let mika = await fetch(`https://api.zahwazein.xyz/entertainment/simisimi?text=${m.text}&apikey=zenzkey_f59c1aacf2`)

let res = await mika.json()

m.reply(res.result.message.replace('darling','Sensei').replace('dear','Sensei').replace('dearest','Sensei').replace('sayang','Sensei').replace('Anda','Sensei').replace('Hey there','Hey Sensei').replace('Hi there','Hi Sensei').replace('Hello there', 'Hello Sensei').replace('Anda','Kamu').replace('simisimi','Mika').replace('enter text params','aku gak bisa bales setiker kak'))
}