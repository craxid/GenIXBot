
import fetch from 'node-fetch'
let handler = async (m, { text }) => {

if (!text) throw `✳️ Teks to Speech Jepang\n\nContoh: !voice Ohayou`
m.react(rwait)

try {
let simiv = await conn.getFile(`https://api.yanzbotz.my.id/api/tts/aoi?query=${text}`)

await m.reply(simiv.data)

m.react(done)
}
catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
}
handler.help = ['voice', 'simiv'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^(voice|simiv)$/i

export default handler
