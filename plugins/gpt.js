
import { ChatGpt } from '../lib/ChatGpt.js'

let handler = async (m, { text, usedPrefix, conn, command }) => {
    
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* .gpt2 presiden Indonesia`
const openai = 'https://telegra.ph/file/8fd766bb9f183c98ba4eb.jpg'
await m.reply(wait)
  
  ChatGpt(text).then(a => {
  let result = a.reply
  
conn.sendMessage(m.chat, {text: result},{quoted: m})
    
}).catch(err => {
  console.error(err)
  m.reply("gw pusing sorry gak bisa jawab")
})
}
handler.command = ['gpt2','chatgpt2']
handler.help = ['gpt2','chatgpt2']
handler.tags = ['ai']
handler.diamond = true
handler.premium = false
export default handler

/*contextInfo: {
    "externalAdReply": {"title": global.botname,
        "body": command + ' ' + text,
        "showAdAttribution": true,
        "mediaType": 1,
        "sourceUrl": '',
        "thumbnailUrl": openai,
        "renderLargerThumbnail": true
    }}*/