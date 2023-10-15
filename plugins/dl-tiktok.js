
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