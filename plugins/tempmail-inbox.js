
import fb from 'api-dylux'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {

 
if (!text) throw `✳️ Temporary Mail`
 
let ling = await fetch(`https://vihangayt.me/tools/get_inbox_tempmail?q=${text}`)
let tmpmail = await ling.json()

let detil = `
*Pengirim:* ${tmpmail.data.fromAddr}
*Penerima:* ${tmpmail.data.toAddr}
*Subjek:* ${tmpmail.data.headerSubject}

*Pesan:*
${tmpmail.data.text}

*Unduh Pesan:* ${tmpmail.data.downloadUrl}
`

conn.sendMessage(m.chat, {text: detil.replace('undefined','Kosong'),
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
 
handler.help = ['mailbox'].map(v => v + ' <url>')
handler.tags = ['tools','prem']
handler.command = /^mailbox$/i
handler.diamond = true

export default handler


//https://vihangayt.me/tools/get_inbox_tempmail?q=U2Vzc2lvbjr536QCm6dKPZ_3ffPXTrdc