
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
	if (!text) throw `✳️ Enter song title\n\n📌Example *${usedPrefix + command}* Hajimari no Setsuna`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `✳️ Vídeo/Audio not found`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🎧')
	let play = `
	≡ *Mika Bot YT MUSIC*
┌──────────────
▢ 📌 *Títle* : ${title}
▢ 📆 *Uploaded at:* ${ago}
▢ ⌚ *Duration:* ${timestamp}
▢ 👀 *View:* ${views}
└──────────────`

/*await conn.sendButton(m.chat, play, fgig, thumbnail, [
    ['🎶 MP3', `${usedPrefix}yta ${url}`],
    ['🎥 MP4', `${usedPrefix}ytv ${url}`]
  ], m, rpl)*/
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']
handler.disabled = true

export default handler
