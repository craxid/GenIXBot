
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
${global.htki} *${global.packname}* ${global.htka}
${global.gy} Dana:  085892734104
${global.gy} Pulsa: 083155936234 ( AXIS )
${global.gy} Pulsa: 085892734104 ( IM3 )
${global.gy} Gopay: 085892734104
${global.sb}

${global.htki} *Website* ${global.htka}
${global.gy} Saweria: https://saweria.co/ClanDare
${global.gy} Trakteer: https://teer.id/dede_klender
${global.sb}

${global.zt} *[ADS] Dapatkan $5 hanya dengan mengisi survey*
• *Link :* https://lootup.me?refer=3892731

Thanks for Donation!
`
let img = 'https://telegra.ph/file/77e1d9fa9c14042bcfcb4.png'
//conn.sendFile(m.chat, img, 'img.jpg', don, m)

conn.sendMessage(m.chat, {
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
