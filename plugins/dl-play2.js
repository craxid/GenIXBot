
import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let limit = 8
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  
    if (!text) throw `✳️ Masukan judul lagu\n\n📌Contoh *${usedPrefix + command}* Hajimari no Setsuna`
  let chat = global.db.data.chats[m.chat]
  let res = await yts(text)
  //let vid = res.all.find(video => video.seconds < 3600)
  let vid = res.videos[0]
  if (!vid) throw `✳️ Vídeo/Audio tidak ditemukan`
  let isVideo = /vid$/.test(command)
  m.react('🎧') 
  
  try {
  let q = isVideo ? '360p' : '128kbps' 
  let v = vid.url
  let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
  let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
  let title = await yt.title
  let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH)
  
   if (size.split('MB')[0] >= limit) return m.reply(` ≡  *Mika Bot YTDL*\n\n▢ *⚖️ Size* : ${size}\n▢ *🎞️ Query* : ${q}\n\n▢ _File melebihi batas unduhan_ *+${limit} MB*`)
  
  let play = `
${global.htki} *Mika Bot MUSIC* ${global.htka}
${global.gx} 📌 *Judul* : ${vid.title}
${global.gx} 📆 *Diunggah pada:* ${vid.ago}
${global.gx} ⌚ *Durasi* ${vid.timestamp} Menit
${global.gx} 👀 *Dilihat:* ${vid.views} Kali
${global.sb}

_Mengirim..._`
conn.sendFile(m.chat, vid.thumbnail, 'play', play, m, null)

if (size.split('MB')[0] >= limit) return m.reply(`
≡  *Mika Bot YTDL*
▢ *⚖️ Ukuran* : ${size}
▢ *🎞 Deskripsi* : ${q}
▢ _File melebihi batas ukuran_ *+${limit} MB*`) 

if (size.includes('GB')) return m.reply(` ≡  *Mika Bot YTDL*
▢ *⚖️ Ukuran* : ${size}
▢ *🎞 Bitrate* : ${q}
▢ _File melebihi batas unduhan_ *+${limit} MB*`) 

	  conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /vid$/.test(command)), `
${global.htki} *Mika Bot YTDL* ${global.htka}
${global.gx} *📌 Judul* : ${title}
${global.gx} *🎞 Bitrate* : ${q}
${global.gx} *⚖️ Ukuran* : ${size}
${global.sb}
`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done) 
    } catch {
		m.reply(`Error: Coba lagi`)
    }

}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']

export default handler
