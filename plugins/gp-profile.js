import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ Pengguna tidak ada di database`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')

let teg = `@${who.replace(/@.+/, '')}`

let str = `
┌───「 *Profil* 」
▢ *🔖 Nama:* 
   • ${username} ${registered ? '\n   • ' + name + ' ': ''}
   • ${teg}
▢ *📱 Nomor:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
▢ *🔗 Link:* wa.me/${who.split`@`[0]}${registered ? '\n▢ *🎈 Umur*: ' + age + ' Tahun' : ''}
▢ *⚠️ Peringatan:* ${warn}/${maxwarn}
▢ *💎 Diamond:* ${diamond}
▢ *🆙 Level*: ${level}
▢ *⬆️ XP*: Total ${exp} (${user.exp - min} / ${xp})\n${math <= 0 ? `bisa untuk meningkatkan level *${usedPrefix}levelup*` : `Kurang _*${math}xp*_ untuk naik ke tingkat berikutnya`}
▢ *🏆 Rank:* ${role}
▢ *📇 Terdaftar:* ${registered ? 'Ya': 'Tidak'}
▢ *⭐ Premium*: ${prem ? 'Ya' : 'Tidak'}
└──────────────`
    //conn.sendFile(m.chat, pp, 'profil.jpg', str, m, false, { mentions: [who] })
   let lepellu = ('Level:')
   
/*conn.sendMessage(m.chat, {
text: str,
contextInfo: {
externalAdReply: {
title: (`${username}`),
body: (`Level: ${level}`),
thumbnailUrl: pp,
sourceUrl: global.fgig,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})*/

conn.sendMessage(m.chat, {text: str,
contextInfo: {
    "externalAdReply": {
        "title": (`${conn.getName(m.sender)}`),
        "body": (`Level: ${user.level}`),
        "showAdAttribution": true,
        "mediaType": 1,
        "sourceUrl": global.fgig,
        "thumbnailUrl": pp,
        "renderLargerThumbnail": true
    }}}, 
    {quoted: m})
    
    m.react(done)

}
handler.help = ['profile']
handler.tags = ['group']
handler.command = ['profile', 'profil'] 

export default handler
