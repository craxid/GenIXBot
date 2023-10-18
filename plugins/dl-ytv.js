
import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'

let limit = 25

let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
	if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
    if (!args[0].match(/youtu/gi)) throw `❎ link YouTube tidak valid`
	 let chat = global.db.data.chats[m.chat]
	 m.reply(wait)
	 
	try {
		let q = args[1] || '360p'
		let v = args[0]
		let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
		let dl_url = await yt.video[q].download()
		let title = await yt.title
		let size = await yt.video[q].fileSizeH 
		
if (size.split('MB')[0] >= limit) 
return m.reply(`
≡  *Mika Bot YTDL*
▢ *⚖️ Ukuran* : ${size}
▢ *🎞️ Kualitas* : ${q}
▢ _File melebihi batas unduhan_ *+${limit} MB*
`)
       
	  conn.sendFile(m.chat, dl_url, title + '.mp4', `
${global.htki} *Mika Bot YT Video* ${global.htka}
${global.gx} *📌 Judul* : ${title}
${global.gx} *📟 Ekstensi* : mp4
${global.gx} *🎞️ Kualitas* : ${q}
${global.gx}  *⚖️ Ukuran* : ${size}
${global.sb}
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
