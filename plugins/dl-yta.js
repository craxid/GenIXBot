
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';

let limit = 8 

let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
  if (!args[0].match(/youtu/gi)) throw `❎ Tidak dapat diunduh`
   m.react(rwait)
 let chat = global.db.data.chats[m.chat]
  try {
		let q = '128kbps'
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
		const dl_url = await yt.audio[q].download()
		const title = await yt.title
		const size = await yt.audio[q].fileSizeH
		
if (size.split('MB')[0] >= limit) return m.reply(` ≡  *Mika Bot YTDL*\n\n▢ *⚖️ Size* : ${size}\n▢ *🎞️ Query* : ${q}\n\n▢ _File melebihi batas unduhan_ *+${limit} MB*`)
		
		conn.sendFile(m.chat, dl_url, title + '.mp3', `
 ≡  *Mika Bot YTDL*
  
▢ *📌 Judul* : ${title}
▢ *⚖️ Ukuran* : ${size}
`.trim(), m, false, { mimetype: 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done)
        } catch {
			await m.reply(`❎ Error while downloading an audio`)
} 

}
handler.help = ['ytmp3 <url>']
handler.tags = ['dl']
handler.command = ['ytmp3', 'yta', 'ytaudio'] 
handler.diamond = true

export default handler
