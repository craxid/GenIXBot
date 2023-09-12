let handler = async (m, { conn }) => {
let name = await conn.getName(m.sender)
let thumb = 'https://telegra.ph/file/bd044275940ed1b62efcd.jpg'
let mikapp = 'https://telegra.ph/file/a9a78b769836fe10fa62d.jpg'

let mika = `Halo kak ${name} 👋\nAda yang bisa ${global.packname} bantu?\n\nKetik !help untuk membuka Menu`


    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    
conn.sendMessage(m.chat, {
text: mika,
contextInfo: {
externalAdReply: {
title: (`${name}`),
body: ('Aku Online Kak!'),
thumbnailUrl: mikapp,
sourceUrl: ('https://www.facebook.com/dede2015k'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
}
handler.customPrefix = /^(bot|bot?|bott|mika|oy|bang|banh)$/i
handler.command = new RegExp

export default handler