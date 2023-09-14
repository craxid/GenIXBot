
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
┏━━━ꕥ〔 *${global.packname}* 〕ꕥ━⬣ 
┃Dana:  085892734104
┃Pulsa: 083155936234 ( AXIS )
┃Pulsa: 085892734104 ( IM3 )
┃Gopay: 085892734104
┗━━━ꕥ
┏━━━ꕥ〔 *Website* 〕ꕥ━⬣ 
┃Saweria: https://saweria.co/ClanDare
┃Trakteer: https://teer.id/dede_klender
┗━━━ꕥ

▢ *[ADS] Dapatkan $5 hanya dengan mengisi survey*
• *Link :* https://lootup.me?refer=3892731

Thanks for Donationing!
`
let img = 'https://telegra.ph/file/77e1d9fa9c14042bcfcb4.png'
//conn.sendFile(m.chat, img, 'img.jpg', don, m)

conn.sendMessage(m.chat, m{
text: don,
contextInfo: {
externalAdReply: {
title: (`Donasi`),
body: ('Dukung aku agar bot ini tetap hidup'),
thumbnailUrl: img,
sourceUrl: ('https://saweria.co/ClanDare'),
mediaType: 3,
showAdAttribution: true,
renderLargerThumbnail: false
}}})

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['donasi', 'donate', 'dukung'] 

export default handler
