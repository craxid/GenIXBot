
/*import { sticker } from '../lib/sticker.js'
import axios from 'axios'

let handler = async (m, { conn, text }) => {
   if (!text) return m.reply('Teksnya Mana Sayang?')
   if (text.length > 30) return m.reply('Maksimal 30 Teks!')
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')

   const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#FFFFFF",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.name,
            "photo": {
               "url": pp
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
   let stiker = await sticker(buffer, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
}

handler.help = ['qc']
handler.tags = ['sticker']
handler.command = /^(qc|quoted|quotly)$/i

handler.limit = true

export default handler
*/

import axios from 'axios'
import fs from 'fs'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
if (!text) throw 'Masukan Text'
let name = await conn.getName(m.sender)
let avatar = await conn.profilePictureUrl(m.sender, 'image').catch(_=> "https://telegra.ph/file/a4ec75f6ce8b2b565a3e3.png")
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#FFFFFF",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": name,
        "photo": {
          "url": avatar
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
const res = await axios.post('https://bot.lyo.su/quote/generate', 
  json, 
{
  headers: {'Content-Type': 'application/json'}
})
const buffer = await sticker(Buffer.from(res.data.result.image, 'base64'), false, "© Mika Bot", "Bot WhatsApp")
conn.sendFile(m.chat, buffer, 'sticker.webp', '', m)
}
handler.command = ['qc']

export default handler