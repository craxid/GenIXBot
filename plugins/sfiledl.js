
import fetch from 'node-fetch')
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
await m.reply('Tunggu Sebentar...')
let res = await fetch(`https://api.violetics.pw/api/downloader/sfile?apikey=beta&url=${args[0]}`)
let json = await res.json()
if (!args[0]) throw `Link not found..\n\nExample:\n${usedPrefix}sfile https://sfile.mobi/1Qot1AZcAsS7`
// if (!args[0].match(/https:\/\/sfile.mobi\/)/gi)) throw `Link not found..\n\nExample:\n${usedPrefix}sfile https://sfile.mobi/1Qot1AZcAsS7`
let src = `*Judul:* ${json.result.title}\n*Size:* ${json.result.size}\n*Link:* ${json.result.url}`.trim()
m.reply(src)
// conn.sendFile(m.chat, json.result.url, `${json.result.title}`,null, m)
conn.sendMedia(m.chat, json.result.url, 0, {fileName: `${json.result.title}`})
}

handler.help = ['sfile'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((sfile|dl)?)$/i
handler.diamond = true

export default handler

//https://api.yanzbotz.my.id/api/downloader/sfile?url=https://sfile.mobi/2SoXEZQi3mF