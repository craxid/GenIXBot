
import fg from 'api-dylux' 
import { tiktokdl } from '@bochilteam/scraper'
    let limit = 10
let handler = async (m, { conn, text, args, usedPrefix, command}) => {

    
if (!args[0]) throw `✳️ Masukan link Tiktok\n\n 📌 Contoh : ${usedPrefix + command} https://vm.tiktok.com/L3N2t1Kt02/`
if (!args[0].match(/tiktok/gi)) throw `❎  Mohon periksa apakah link berasal dari TikTok`
m.react(rwait)

try {
let ling = await fetch(`https://vihangayt.me/download/fb2?url=${text}`)
let fbdl = await ling.json()

let detil = `
*Judul:* ${fbdl.data.title}
*Deskripsi:* ${fbdl.data.desc}

_Sedang mengirim..._
`
let detil2 = `
*Judul:* ${fbdl.data.title}
*Deskripsi:* ${fbdl.data.desc}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Facebook Downloader'),
body: (`${fbdl.data.title}`),
thumbnailUrl: (`${fbdl.data.thumb}`),
sourceUrl: global.fbku,
mediaType: 1,
renderLargerThumbnail: true
}}},
{quoted: m})

await conn.sendFile(m.chat, fbdl.data.sd, 'ig.mp4', 'TikTok Downloader\n© Mika Bot', m)

 }
 catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
}
    
}  
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.diamond = true

export default handler

//https://api.azz.biz.id/api/tiktok?url=https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226&key=global