
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
let type = (command).toLowerCase()
switch (type) {

/*try {
let simiv = await conn.getFile(`https://api.yanzbotz.my.id/api/tts/siti?query=${text}`)*/

case 'ardi':
case 'gadis':
case 'jannie':
case 'aoi':
case 'daichi':
case 'mayu':
case 'naoki':
case 'shiori':
case 'dimas':
case 'tuti':
case 'jajang':
let simiv = await conn.getFile(`https://api.yanzbotz.my.id/api/tts/siti?query=${text}`)

conn.sendFile(simiv.data)

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
