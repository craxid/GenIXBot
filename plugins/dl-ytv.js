
import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let limit = 15 
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
	if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
    if (!args[0].match(/youtu/gi)) throw `❎ link YouTube tidak valid`
	 let chat = global.db.data.chats[m.chat]
	 
	 m.react(rwait) 
	 m.reply(wait)
	try {
		let q = args[1] || '360p'
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
		const dl_url = await yt.video[q].download()
		const title = await yt.title
		const size = await yt.video[q].fileSizeH 
		
       if (size.split('MB')[0] >= limit) return m.reply(` ≡  *Mika Bot YTDL*\n\n▢ *⚖️ Size* : ${size}\n▢ *🎞️ Query* : ${q}\n\n▢ _The file exceeds the download limit_ *+${limit} MB*`)
       
	  conn.sendFile(m.chat, dl_url, title + '.mp4', `
 ≡  *Mika Bot YT Video*
  
▢ *📌 Judul* : ${title}
▢ *📟 Ekstensi* : mp4
▢ *🎞️ Kualitas* : ${q}
▢ *⚖️ Ukuran* : ${size}
`.trim(), m, false, { asDocument: chat.useDocument })
		m.react(done) 
		
	} catch {	
       m.reply(`✳️ Kesalahan saat mengunduh video, coba kirim link yang lain`) 
	} 
		 
}
handler.help = ['ytmp4 <link yt>']
handler.tags = ['dl'] 
handler.command = ['ytmp4', 'ytv','ytvideo']
handler.diamond = true

export default handler
