
import qrcode from "qrcode"
let handler  = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan Text'
  
  m.reply('Tunggu bentar...')
  
  conn.sendFile(m.chat, await qrcode.toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', `2023 © Mika Bot\n\n[ ${text} ]`, m)
  m.react('👾')

}

handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i
handler.diamond = true

export default handler