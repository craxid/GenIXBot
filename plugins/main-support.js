
let handler = async (m, { conn }) => {

let pesan = (`
≡  *Mika ᴮᴼᵀ ┃ Kontribusi*

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
Link bot
https://zybra.eu.org 
◈ ━━━━━━━━━━━━━━━━━━━━ ◈

Terima Kasih kepada:

- Tuhan Yang Maha Esa
- WhatsApp Business
- Library Baileys
- Penyedia API
- Plugin Base DannTeam
- Teman-teman yang bantu ngetes bot

_Project Bot ini Tidak akan terwujud tanpa kontribusi kalian_
`)

conn.sendMessage(m.chat, { text: pesan,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: (`Kontribusi`),
body: ('Thanks for all!'),
thumbnailUrl: ,
sourceUrl: global.fgig,
thumbnailUrl: global.ppmika,
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted: m})
}
handler.help = ['kontribusi']
handler.tags = ['main']
handler.command = ['contribution', 'thxto', 'kontribusi'] 

export default handler
/*▢ Grup
https://chat.whatsapp.com/BDYIsBhoR2I2aXpEvZRzWP
◈ ━━━━━━━━━━━━━━━━━━━━ ◈
*/