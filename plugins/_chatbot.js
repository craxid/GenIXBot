

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
        m.reply(res.respon.replace('simsimi', 'DyLux').replace('Simsimi', 'DyLux').replace('sim simi', 'DyLux'))
    
}


import fetch from 'node-fetch'

export async function before(m, { conn }) {

if (m.isBaileys && m.fromMe)
        return !0

if (!m.isGroup) return !0
    let user = global.db.data.users[m.sender]
    
if (!user.chatbot)
return !0

let mika = await fetch(`https://api.azz.biz.id/api/alicia?q=${text}&user=Mika%20Bot&key=mangea`)

let res = await mika.json()

m.reply(res.result.replace('alicia','Mika Bot'))
}

//let mika = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?id=id3xBWK9-mcu8Y8JOQjbKzzAmOzgGgmp8HomTp-UOq8&query=${m.text}`)