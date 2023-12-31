//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
import db from '../lib/database.js'

export async function before(m, { conn }) {
    let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    user.role = global.rpg.role(user.level).name
    if (before !== user.level) {
    
let teks = `
Selamat, *${name}* Naik Level! 🎉

Progress: *[ LEVEL ${before} ]* ➠ *[ LEVEL ${user.level} ]*

gunakan *.profile* untuk memeriksa
`.trim()

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')

let thumb = 'https://telegra.ph/file/bd044275940ed1b62efcd.jpg'

conn.sendMessage(m.chat, {
text: teks,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: (`${name}`),
body: (`Level: ${user.level}`),
thumbnailUrl: pp,
sourceUrl: global.fbku,
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})

    }
}
