
import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {

let limit = 150

if (!{args}) throw `✳️ Download aplikasi menggunakan ID\n\nContoh: !apkdl com.whatsapp`
 
try {
let ling = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
let apkdl = await ling.json()
let apkname = `Nama Aplikasi : ${tb.result.name}.apk`
let ukur = `${tb.result.size}`

if (ukur.split('MB')[0] >= limit)
return m.reply(`
${global.htki} *Mika Bot APK-DL* ${global.htka}

${global.htjava} *Nama Aplikasi* : ${tb.result.name}
${global.htjava} *Size* : ${tb.result.size}

${global.htjava} _File melebihi batas unduhan_ *+${limit} MB*`)

let detil = `
*Nama File:* ${tb.result.server_filename}
*Ukuran:* ${tb.result.size} byte
*MD5:* ${tb.result.md5}
*Ukuran:* ${tb.result.size}

_Sedang mengirim..._
`
let detil2 = `
*Nama File:* ${tb.result.server_filename}
*Ukuran:* ${tb.result.size} byte
*MD5:* ${tb.result.md5}
*Ukuran:* ${tb.result.size}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Terabox Downloader'),
body: (`${tb.result.name}`),
thumbnailUrl: (`${tb.result.icon}`),
sourceUrl: (`${0}`),
mediaType: 1,
renderLargerThumbnail: false
}}},
{quoted: m})

await conn.sendFile(m.chat, tb.result.dllink, (`${tb.result.name}`), detil2, m)

 }
 catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
}
handler.help = ['terabox']
handler.tags = ['dl']
handler.command = /^((tera|box)(downloader|dl)?)$/i
handler.diamond = true
export default handler


//https://api.yanzbotz.my.id/api/downloader/terabox?url=https://www.terabox.app/wap/share/filelist?surl=JwlPncQOrzuYcvyrK683Cw