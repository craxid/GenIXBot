
let handler = async (m, { conn }) => {

let pesan = (`
≡  *Mika ᴮᴼᵀ ┃ Kontribusi*

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ Grup
https://chat.whatsapp.com/BDYIsBhoR2I2aXpEvZRzWP
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
externalAdReply: {
title: (`Kontribusi`),
body: ('Thanks for all!'),
thumbnailUrl: ,
sourceUrl: global.dygp,
mediaType: 3,
showAdAttribution: true,
renderLargerThumbnail: false
}}},
 )
}
handler.help = ['kontribusi']
handler.tags = ['main']
handler.command = ['contribution', 'thxto', 'kontribusi'] 

export default handler
