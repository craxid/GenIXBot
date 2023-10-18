
let handler = async (m, { conn }) => {
let name = await conn.getName(m.sender)
let thumb = 'https://telegra.ph/file/bd044275940ed1b62efcd.jpg'
let mikapp = 'https://telegra.ph/file/a9a78b769836fe10fa62d.jpg'

let mika = `Halo kak ${name} 👋\nAda yang bisa ${global.packname} bantu?\n\nKetik !help untuk membuka Menu\nKetik *!autoai* untuk mengaktifkan ChatGPT tanpa command`

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let username = conn.getName(who)

let fuk = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": ""
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Mika;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${username}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  }
    

conn.sendMessage(m.chat, {text: mika,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: (`${username}`),
body: ('Aku Online Kak!'),
thumbnailUrl: mikapp,
sourceUrl: ('https://www.facebook.com/dede2015k'),
mediaType: 1,
renderLargerThumbnail: true
}}},
{quoted: fuk})


//await conn.sendMessage(m.chat, { text: mika }, { quoted: fuk })

}
handler.customPrefix = /^(bot|bot?|bott|mika|oy|bang|banh|p)$/i
handler.command = new RegExp

export default handler
