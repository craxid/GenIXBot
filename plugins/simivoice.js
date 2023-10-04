
import fetch from 'node-fetch'
let handler = async (m, { text }) => {

if (!text) throw `✳️ Masukkan Model dan teks\n\nContoh: !voice siti Hai\n\nDaftar Suara

Ardi 
Gadis
Jannie
Aoi
Daichi
Mayu
Naoki
Shiori
Dimas
Tuti
Jajang
`
m.react(rwait)

try {
let model = text.split('|')[0] ? text.split('|')[0] : '-'
  let teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
    
let simiv = await conn.getFile(`https://api.yanzbotz.my.id/api/tts/siti?query=ain${text}`)

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
