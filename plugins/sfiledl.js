
import fetch from 'node-fetch';
import { MessageType, MessageOptions, Mimetype } from '@adiwajshing/baileys';

let handler = async (m, { conn, args, usedPrefix, command }) => {
await m.reply('Tunggu bentar...')
let res = await fetch(`https://api.yanzbotz.my.id/api/downloader/sfile?url=${args[0]}`)

let json = await res.json()

if (!args[0]) throw `Link not found..\n\nExample:\n${usedPrefix}sfile https://sfile.mobi/1Qot1AZcAsS7`

let src = `*Judul:* ${json.result.title}\n*Link:* ${json.result.url}`.trim()

m.reply(wait)

await conn.sendMedia(m.chat, json.result.url, 0, {fileName: `${json.result.title}`})

}

handler.help = ['sfile'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((sfile|dl)?)$/i
handler.diamond = true

export default handler

//https://api.yanzbotz.my.id/api/downloader/sfile?url=https://sfile.mobi/2SoXEZQi3mF