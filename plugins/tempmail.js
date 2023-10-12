
import fb from 'api-dylux'
import fetch from 'node-fetch'
let limit = 15

let handler = async (m, { conn, text, args, usedPrefix, command }) => {

 
//if (!args[0]) throw `✳️ Temporary Mail`
 
let ling = await fetch(`https://vihangayt.me/tools/tempmail`)
let tmpmail = await ling.json()
let data = tmpmail.replace(',',',\n')
let detil = `
*Data:* ${data.data}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Temporary Mail'),
body: global.namebot,
thumbnailUrl: global.ppmika,
mediaType: 1,
renderLargerThumbnail: false
}}},
{quoted: m})
 }
 
handler.help = ['tempmail'].map(v => v + ' <url>')
handler.tags = ['tools','prem']
handler.command = /^((temp|orary)(tmp|mail)?)$/i
handler.diamond = true

export default handler
