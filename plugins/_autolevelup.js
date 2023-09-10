//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    user.role = global.rpg.role(user.level).name
    if (before !== user.level) {
        let teks1 =`┌─「 *NAIK LEVEL* 」
‣ *Sebelumnya:* *${before}*
‣ *Sekarang:* *_${user.level}_*
└──────────────`
 
conn.sendMessage(m.chat, {
text: teks1,
contextInfo: {
externalAdReply: {
title: ('Mika Misono Bot'),
body: ('Jangan Spam Bot!'),
thumbnailUrl: global.ppmika,
sourceUrl: ('https://www.facebook.com/dede2015k'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
 
 _untuk menonaktifkan, ketik_
_*/off autolevelup*_
	`.trim())
    }
}

