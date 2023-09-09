
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
┏━━━ꕥ〔 * {global.namebot} * 〕ꕥ━⬣ 
┃Dana:  085892734104
┃Pulsa: 083155936234 ( AXIS )
┃Pulsa: 085892734104 ( IM3 )
┃Gopay: 085892734104
┗━━━ꕥ
┏━━━ꕥ〔 *Website* 〕ꕥ━⬣ 
┃Saweria: https://saweria.co/ClanDare
┃Trakteer: https://teer.id/dede_klender
┗━━━ꕥ

Thanks for Donationing!
`
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
