let handler = async (m, { conn }) => {
let name = await conn.getName(m.sender)
let thumb = 'https://telegra.ph/file/bd044275940ed1b62efcd.jpg'
let dann = `Halo ${name} 👋\n\nAda yang bisa ${global.packname} bantu?\n\nKetik !help untuk membuka Menu`
conn.sendMessage(m.chat, {
text: dann,
contextInfo: {
externalAdReply: {
title: global.namebot,
body: global.pesanbot,
thumbnailUrl: thumb,
sourceUrl: global.ppmika,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
}
handler.customPrefix = /^(bot|bot?|bott|mika|oy|bang)$/i
handler.command = new RegExp

export default handler