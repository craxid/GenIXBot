
let handler = async(m, { conn, usedPrefix, command }) => {

//${global.htjava} Scan QR diatas menggunakan aplikasi bank / e-wallet untuk mendukung Bot

    let don = `
${global.htki} *${global.packname}* ${global.htka}
${global.gy} Dana:  085892734104
${global.gy} Pulsa: 083155936234 ( AXIS )
${global.gy} Pulsa: 085892734104 ( IM3 )
${global.gy} Gopay: 085892734104
${global.sb}

${global.htki} *Website* ${global.htka}
${global.gy} Trakteer: https://teer.id/dede_klender
${global.sb}

${global.htjava} Dukunganmu sangat berarti bagi kelangsungan hidup bot
`
let img = 'https://telegra.ph/file/77e1d9fa9c14042bcfcb4.png'
let imej = 'https://cdn.trakteer.id/images/embed/trbtn-red-9.png'
//conn.sendFile(m.chat, img, 'img.jpg', don, m)

conn.sendMessage(m.chat, {
text: don,
contextInfo: {
externalAdReply: {
title: (`Donasi`),
body: (''),
mediaType: 1,
sourceUrl: ('https://teer.id/dede_klender'),
thumbnailUrl: imej,
showAdAttribution: true,
renderLargerThumbnail: false
}}}, {quoted: m})

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['donasi', 'donate', 'dukung'] 

export default handler

//${global.zt} *[ADS] Dapatkan $5 hanya dengan mengisi survey*
//• *Link :* https://lootup.me?refer=3892731