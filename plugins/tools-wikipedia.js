import axios from 'axios'
import cheerio from 'cheerio'


let handler = async (m, { text }) => {
	if (!text) throw `✳️ Masukan kueri wiki di Wikipedia Bahasa Indonesia` 
	
    try {
	const link =  await axios.get(`https://id.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	m.reply(`▢ *Wikipedia*

‣ Mencari: ${wik}

${resulw}`)
} catch (e) {
  m.reply('⚠️ Tidak ada hasil ditemukan ')
}
}
handler.help = ['wikipedia']
handler.tags = ['tools']
handler.command = ['wiki','wikipedia'] 


export default handler
