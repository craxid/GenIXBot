
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
Kamu dapat menyumbang jika ingin membantu agar bot tetap aktif

▢ *PayPal*
• *Link :* https://paypal.me/dedeklender

▢ *Gopay*
• *Nomor :* 085892734104

▢ *Saweria*
• *Link :* https://saweria.co/ClanDare

▢ *Trakteer*
• *Link :* https://teer.id/dede_klender

▢ *[ADS] Dapatkan $5 hanya dengan mengisi survey*
• *Link :* https://lootup.me?refer=3892731
`
let img = 'https://telegra.ph/file/3e0fdb49a591b0056dbe9.png'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['donasi', 'donate', 'dukung'] 

export default handler
