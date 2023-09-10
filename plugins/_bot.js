let handler = async (m, { conn }) => {
let name = await conn.getName(m.sender)
let thumb = 'https://telegra.ph/file/bd044275940ed1b62efcd.jpg'
let mika = `Halo kak ${name} 👋\nAda yang bisa ${global.packname} bantu?\n\nKetik !help untuk membuka Menu`
conn.sendMessage(m.chat, {
text: mika,
contextInfo: {
externalAdReply: {
title: ('Mika Misono Bot'),
body: ('Jangan Spam Bot!'),
thumbnailUrl: thumb,
sourceUrl: ('https://www.facebook.com/dede2015k'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
}
handler.customPrefix = /^(bot|bot?|bott|mika|oy|bang|banh)$/i
handler.command = new RegExp

export default handler