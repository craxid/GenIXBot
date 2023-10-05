
import fetch from 'node-fetch'
import prepare from '@whiskeysockets/baileys'

let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let dann = '6285892734104@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@whiskeysockets/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: `Mau sewa bot? silahkan chat owner ${conn.user.name}

List Price: https://chat.whatsapp.com/KsflYNKrlNP1BnLMKHyulz

Owner: https://wa.me/+${owner[0]}
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Click to Order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `6285892734104@s.whatsapp.net`
  },
  footerText: '2023 © Mika Bot',
  }},{})
  
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa|sewabot)$/i

export default handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }