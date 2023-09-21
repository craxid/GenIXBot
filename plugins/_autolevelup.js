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
    
let chating = `*Congratulations*, you have leveled up!
*[ ${before} ]* ➠ *[ ${user.level} ]*
Use *.profile* to check`.trim()
let thumb = 'https://telegra.ph/file/bd044275940ed1b62efcd.jpg'

conn.sendMessage(m.chat, {
text: chating,
contextInfo: {
externalAdReply: {
title: globanamebot,
body: globaal.wm2,
thumbnailUrl: thumb,
sourceUrl: dygp,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
    }
}

