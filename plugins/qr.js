let qrcode = require("qrcode")
let handler  = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan Text'
  conn.sendFile(m.chat, await qrcode.toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '2023 © Mika Bot', m)
}

handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i

handler.diamond = true

handler