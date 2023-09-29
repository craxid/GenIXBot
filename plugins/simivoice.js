
import fetch from 'node-fetch'
let handler = async (m, { text }) => {

if (!text) throw `✳️ Masukkan Teks\n\nContoh: !simivoice Hai`
await m.reply(wait)

try {
let simiv = await getFile(`https://api.yanzbotz.my.id/api/ai/simivoice?query=${text}`)

await conn.sendFile(m.chat, simiv.data, 'simi.opus')
}
catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
}
handler.help = ['simivoice', 'simiv'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^(simivoice|simiv)$/i

export default handler
