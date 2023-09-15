let handler = async (m, { conn }) => {
let name = await conn.getName(m.sender)
let thumb = 'https://telegra.ph/file/bd044275940ed1b62efcd.jpg'
let mikapp = 'https://telegra.ph/file/a9a78b769836fe10fa62d.jpg'

// start kode

let ncnl = `
NCNL: Network

Notice !

Aturan utama jangan main rusuh/ganggu, main kooperatif friendly dan saling support ini sirkel solid kalo main rusuh gw ban permanen lu pada..

Lapor ke admin kalo ada yang main rusuh/ganggu sertakan bukti&saksi biar disidang..

Info server
IP/Host: play.ncnl.eu.org
Port: 17810
Versi: Versi terbaru (liat di play store)

Link Server (nambahin IP+Port otomatis)
https://ncnl.eu.org/

Server NCNL: Terraria
IP: terraria.ncnl.eu.org
Port: 2570

Link realm
(Kosong)
`

//end kode

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let username = conn.getName(who)
    
conn.sendMessage(m.chat, {
text: mika,
contextInfo: {
externalAdReply: {
title: (`${username}`),
body: ('No Colly N'),
thumbnailUrl: mikapp,
sourceUrl: ('https://ncnl.eu.org/'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
}
handler.customPrefix = /^rule(|s)$/i
handler.command = new RegExp

export default handler