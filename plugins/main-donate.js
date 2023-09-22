/*
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
┏━━━ꕥ〔 *${global.packname}* 〕ꕥ━⬣ 
┃Dana:  085892734104
┃Pulsa: 083155936234 ( AXIS )
┃Pulsa: 085892734104 ( IM3 )
┃Gopay: 085892734104
┗━━━ꕥ
┏━━━ꕥ〔 *Website* 〕ꕥ━⬣ 
┃Saweria: https://saweria.co/ClanDare
┃Trakteer: https://teer.id/dede_klender
┗━━━ꕥ

▢ *[ADS] Dapatkan $5 hanya dengan mengisi survey*
• *Link :* https://lootup.me?refer=3892731

Thanks for Donation!
`
let img = 'https://telegra.ph/file/77e1d9fa9c14042bcfcb4.png'
//conn.sendFile(m.chat, img, 'img.jpg', don, m)

conn.sendMessage(m.chat, {
text: don,
contextInfo: {
externalAdReply: {
title: (`Donasi`),
body: ('Dukung aku agar bot ini tetap hidup'),
thumbnailUrl: img,
sourceUrl: ('https://saweria.co/ClanDare'),
mediaType: 3,
showAdAttribution: true,
renderLargerThumbnail: false
}}})

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['donasi', 'donate', 'dukung'] 

export default handler
*/

import { generateWAMessageFromContent, prepareWAMessageMedia, proto } from '@adiwajshing/baileys'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import fs from 'fs'

let qris = `${global.qris}`

let handler = async (m, { conn, args, usedPrefix, command }) => {
    
let messa = await prepareWAMessageMedia({ image: await fetch(`${global.qris}`) }, { upload: conn.waUploadToServer })

let catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage, 
"productId": "6639344636131773",
"title": `Donasi kepada Dede K.`,
"description": `Scan untuk Donasi`,
"currencyCode": "IDR",
"bodyText": ${global.wm2},
"footerText": ${global.wm2},
"priceAmount1000": "20000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "15000000",
"retailerId": ${global.wm2},
"url": "http://wa.me/6285892734104"
},
"businessOwnerJid": "6283155936234@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })    

conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}

handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

export default handler