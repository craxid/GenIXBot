
import fetch from 'node-fetch'

export async function before(m, { conn }) {

if (m.isBaileys && m.fromMe)
        return !0

//if (!m.isGroup) return !0
    let user = global.db.data.users[m.sender]
    
if (!user.chatbot)
return !0

let mika = await fetch(`https://api.azz.biz.id/api/alicia?q=${m.text}&user=Mika%20Bot&key=mangea`)

let res = await mika.json()

const iyhkh = {
text: res.respon.replace('Alicia','Mika Bot').replace('6283808217881','6285892734104').replace('Ricky','ZuroX Project'),
contextInfo: {
externalAdReply: {
title: (`${username}`),
body: ('Aku Online Kak!'),
thumbnailUrl: mikapp,
sourceUrl: ('https://www.facebook.com/dede2015k'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}}

m.reply(res.respon.replace('Alicia','Mika Bot').replace('6283808217881','6285892734104').replace('Ricky','ZuroX Project'))
}