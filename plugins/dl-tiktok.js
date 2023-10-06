
import fetch from 'node-fetch'

let handler = async (m, { conn, text, args, usedPrefix, command}) => {

if (!text) throw `✳️ Masukan link Tiktok\n\n 📌 Contoh : ${usedPrefix + command} https://vm.tiktok.com/L3N2t1Kt02/`

try {
let ling = await fetch(`https://api.azz.biz.id/api/tiktok?url=${text}`)
let ttdl = await ling.json()

let detil = `
*User:* ${ttdl.result.author.nickname}
*ID:* ${ttdl.result.author.unique_id}

_Sedang mengirim..._
`
let detil2 = `
*User:* ${ttdl.result.author.nickname}
*ID:* ${ttdl.result.author.unique_id}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('TikTok Downloader'),
body: (`${ttdl.result.author.nickname}`),
thumbnailUrl: (`${ttdl.result.author.avatar}`),
sourceUrl: global.fbku,
mediaType: 1,
renderLargerThumbnail: true
}}},
{quoted: m})

await conn.sendFile(m.chat, ttdl.result.video.no_watermark, 'ttdl.mp4', detil2, m)

 }
 catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
}

handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.diamond = true

export default handler

//https://api.azz.biz.id/api/tiktok?url=https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226&key=global