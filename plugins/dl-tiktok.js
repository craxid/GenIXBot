
import fg from 'api-dylux' 
import { tiktokdl } from '@bochilteam/scraper'
    let limit =15
let handler = async (m, { conn, text, args, usedPrefix, command}) => {

    
if (!args[0]) throw `✳️ Masukan link Tiktok\n\n 📌 Contoh : ${usedPrefix + command} https://vm.tiktok.com/L3N2t1Kt02/`
if (!args[0].match(/tiktok/gi)) throw `❎  Mohon periksa apakah link berasal dari TikTok`
m.react(rwait)

try {
    let p = await fg.tiktok(args[0]) 
    
if (size.split('MB')[0] >= limit) return m.reply(` ≡  *Mika Bot YTDL*\n\n▢ *⚖️ Size* : ${size}\n▢ *🎞️ Query* : ${q}\n\n▢ _The file exceeds the download limit_ *+${limit} MB*`)

var detil2 = `
*Nama:* ${ttdl.result.nickname}
*Deskripsi:* ${ttdl.result.username}
`

    let te = `
┌─⊷ TIKTOK
▢ *Nama:* ${p.nickname}
▢ *Username:* ${p.unique_id}
▢ *Durasi:* ${p.duration}
▢ *Deskripsi:* ${p.description}
└───────────`
    conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
    m.react(done)
    } catch {  	
    try { 
	const { author: { nickname }, video, description } = await tiktokdl(args[0])
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw '❎ Error while downloading the video'
    conn.sendFile(m.chat, url, 'fb.mp4', `
┌─⊷ *TIKTOK DL-2*
▢ *Nickname:* ${nickname} ${description ? `\n▢ *Deskripsi:* ${description}` : ''}
└───────────`, m)
m.react(done)
} catch {
    m.reply(`❎ Error while downloading the video`)
}
}
    
}  
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.diamond = true

// batas
export default handler


import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) throw `✳️ Masukan link Tiktok\n\n 📌 Contoh : !ttdl https://vm.tiktok.com/L3N2t1Kt02/`
m.react(rwait)

let todtod = await fetch(`https://api.arifzyn.xyz/download/tiktok?url=${text}`)
let ttdl = await todtod.json()

var detil = `
*Nama:* ${ttdl.result.name}
*Username:* ${ttdl.result.username}
*Tipe:* ${ttdl.result.type}
*Dilihat:* ${ttdl.result.views}
*Disukai:* ${ttdl.result.likes}
*Komentar:* ${ttdl.result.comments}
*Difavoritkan:* ${ttdl.result.favorite}
*Dibagikan:* ${ttdl.result.shares}
*Deskripsi:* ${ttdl.result.description}

_*Sedang dikirim...*_
`
var detil2 = `
*Nama:* ${ttdl.result.name}
*Username:* ${ttdl.result.username}
*Tipe:* ${ttdl.result.type}
*Dilihat:* ${ttdl.result.views}
*Disukai:* ${ttdl.result.likes}
*Komentar:* ${ttdl.result.comments}
*Difavoritkan:* ${ttdl.result.favorite}
*Dibagikan:* ${ttdl.result.shares}
*Deskripsi:* ${ttdl.result.description}
`

/*conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('TikTok Downloader'),
body: (`${ttdl.result.name}`),
thumbnailUrl: (`${ttdl.result.profile}`),
sourceUrl: (`https://tiktok.com/${ttdl.result.username}`),
mediaType: 1,
renderLargerThumbnail: false
}}},
{quoted: m})*/

await conn.sendFile(m.chat, (`${ttdl.result.video.no-watermark}`), 'ttdl.mp4', detil2, m)
}

handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.diamond = true

export default handler

//https://api.azz.biz.id/api/tiktok?url=https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226&key=global
/*catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}*/