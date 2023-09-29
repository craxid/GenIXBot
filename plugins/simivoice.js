
import fetch from 'node-fetch'
let handler = async (m, { text }) => {

if (!text) throw `✳️ Masukkan Teks\n\nContoh: !simivoice Hai`
m.react(rwait)

try {
let simiv = await conn.getFile(`https://api.yanzbotz.my.id/api/ai/simivoice?query=${text}`)

await m.reply(simiv.data)

m.react(done)
}
catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
}
handler.help = ['simivoice', 'simiv'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^(simivoice|simiv)$/i

export default handler
