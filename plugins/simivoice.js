
import fetch from 'node-fetch'
let handler = async (m, { text }) => {

let res = await getFile(`https://api.yanzbotz.my.id/api/ai/simivoice?query=${text}`)

await conn.sendMessage(m.chat, res.data, 'simi.opus', m)
catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
}
handler.help = ['simivoice', 'simiv'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((simivoice)?simiv)$/i

export default handler
