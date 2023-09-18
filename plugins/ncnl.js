let handler = async (m, { conn }) => {
let name = await conn.getName(m.sender)
let thumb = 'https://telegra.ph/file/016c521fb63069af28cec.jpg'
let mikapp = 'https://telegra.ph/file/a9a78b769836fe10fa62d.jpg'

// start kode

let ncnl = `
NCNL Network

Info server
IP/Host: ncnl_legacy.aternos.me
Port: 40383
Versi: Versi terbaru (liat di play store)

Link Server (males update)
```https://ncnl.eu.org/```

Server NCNL Terraria
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
text: ncnl,
contextInfo: {
externalAdReply: {
title: (`NCNL Network`),
body: ('KLIK DISINI UNTUK LOGIN'),
thumbnailUrl: thumb,
sourceUrl: ('minecraft://?addExternalServer=NCNL_Legacy.aternos.me|NCNL_Legacy.aternos.me:40383'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}})
}
handler.customPrefix = /^ncnl|server$/i
handler.command = new RegExp

export default handler