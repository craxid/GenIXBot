
import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {

let limit = 150

if (!args[0]) throw `✳️ Download File Terabox`
 
try {
let ling = await fetch(`https://api.yanzbotz.my.id/api/downloader/terabox?url=${args[0]}`)
let tb = await ling.json()
let apkname = `Nama Aplikasi : ${tb.result.name}.apk`
let ukur = `${tb.result.size}`

if (ukur.split('MB')[0] >= limit)
return m.reply(`
${global.htki} *Mika Bot Terabox-DL* ${global.htka}

${global.htjava} *Nama File* : ${tb.result.server-name}
${global.htjava} *Size* : ${tb.result.size}

${global.htjava} _File melebihi batas unduhan_ *+${limit} Byte*`)

let detil = `
*Nama File:* ${tb.result.server_filename}
*Ukuran:* ${tb.result.size} byte
*MD5:* ${tb.result.md5}

_Sedang mengirim..._
`
let detil2 = `
*Nama File:* ${tb.result.server_filename}
*Ukuran:* ${tb.result.size} byte
*MD5:* ${tb.result.md5}
`

conn.sendMessage(m.chat, {text: detil,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Terabox Downloader'),
body: (`${tb.result.server_filename}`),
thumbnailUrl: global.mikasampul,
sourceUrl: (`${args[0]}`),
mediaType: 1,
renderLargerThumbnail: false
}}},
{quoted: m})

await conn.sendFile(m.chat, { document: { url: tb.result.dllink }, fileName: tb.result.server_filename }, detil2, m)
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