let handler = async (m, { conn }) => {
let name = await conn.getName(m.sender)
let thumb = 'https://telegra.ph/file/bd044275940ed1b62efcd.jpg'
let mikapp = 'https://telegra.ph/file/a9a78b769836fe10fa62d.jpg'

let mika = `
Kebijakan Privasi, Syarat Ketentuan dan Peraturan Mika Misono Bot

🔐 Kebijakan Privasi
1. Bot tidak akan merekam data riwayat chat user.
2. Bot tidak akan menyebarkan nomor users.
3. Bot tidak akan menyimpan media yang dikirimkan oleh users.
4. Bot tidak akan menyalah gunakan data data users.
5. Owner berhak melihat data riwayat chat users.
6. Owner berhak melihat status users.
7. Owner dapat melihat riwayat chat, dan media yang dikirimkan users.
( DATA KALIAN AMAN 100% DAN PRIVASI KALIAN TERJAGA 100% )

📃 Peraturan Penggunaan
1. Dilarang menelpon Atau video call nomor bot.
2. Dilarang kirim berbagai bug, virtex, dll ke nomor bot.
3. Diharap Keras melakukan spam dalam penggunaan bot.
4. Dilarang Menculik bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Tidak menyalah gunakan fitur fitur bot.
6. Dilarang keras menggunakan fitur bot 18+ Bagi Yg bukan User Premium/bawah 18+
( Konsokuensi jika mlanggar = BLOCK, BANNED, SPAM BUG. BLACK LIST, VIRALIN )

🖇️ Syarat Ketentuan  
1. Bot akan keluar dari group Jika Waktu Sewa Habis.
2. Bot dapat mem-ban users Jika melakukan Spam
3. Bot *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*
4. Bot akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. Bot bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

📬 Rules: 3/09/23
`

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let username = conn.getName(who)
    
conn.sendMessage(m.chat, {
text: mika,
contextInfo: {
externalAdReply: {
title: (`${username}`),
body: ('Peraturan Bot'),
thumbnailUrl: mikapp,
sourceUrl: global.dygp,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
}
handler.customPrefix = /^rule(|s)$/i
handler.command = new RegExp

export default handler