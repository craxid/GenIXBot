
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `📌 Contoh : ${usedPrefix + command} 😎+🤑`
if (!text.includes('+')) throw  `✳️ Pisahkan dengan *+* \n\n📌 Contoh : \n*${usedPrefix + command}* 😎+🤑`
let [emoji, emoji2] = text.split`+`
let anu = await (await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v6&q=${encodeURIComponent(emoji)}_${encodeURIComponent(emoji2)}`) ).json()  
for (let res of anu.results) {
let stiker = await sticker(false, res.url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
}}

handler.help = ['emojimix <😎+🤑>']
handler.tags = ['sticker']
handler.command = ['emojimix'] 
handler.diamond = true

export default handler
