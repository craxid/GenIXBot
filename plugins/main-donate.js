
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
${global.htjava} Scan menggunakan aplikasi bank / e-wallet untuk mendukung Bot

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

//conn.sendMessage(m.chat, {
const yth = {
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}

conn.sendMessage(m.chat, yth, img, 'img.jpg', m)


}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['donasi', 'donate', 'dukung'] 

export default handler