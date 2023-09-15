let handler = async (m, { conn }) => {
let name = await conn.getName(m.sender)
let thumb = 'https://telegra.ph/file/bd044275940ed1b62efcd.jpg'
let mikapp = 'https://telegra.ph/file/a9a78b769836fe10fa62d.jpg'

// start 

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let username = conn.getName(who)
    
conn.sendMessage(m.chat, {
text: mika,
contextInfo: {
externalAdReply: {
title: (`${username}`),
body: ('Kebijakan Bot'),
thumbnailUrl: mikapp,
sourceUrl: global.dygp,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
}
handler.customPrefix = /^rule(|s)$/i
handler.command = new RegExp

export default handler