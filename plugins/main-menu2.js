
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _Gunakan perintah ini tanpa awalan_

▢ Si tienes más  audios   
envíame por t.me/fgsupp_bot el *audio + comando* con en el que responderá

┌─⊷ *AUDIOS* 
▢ Bot
▢ Selamat Pagi
▢ Selamat Siang
▢ Selamat Malam
▢ Fino señores!
▢ Sad
└──────────────
`

    let pp = '.src/akebi_lvlup.jpg' 
    conn.sendFile(m.chat, pp, 'akebi_bot.jpg', m2, m, null, rpl)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler
