

import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Mencari chord lagu dari perintah yang diberikan pengguna\n\nContoh: !chord iwan fals manusia setengah dewa`
m.reply(wait)

//code area
try {
    let chordlagu = await fetch(`https://api.zahwazein.xyz/searching/chordlagu?query=${text}&apikey=zenzkey_f59c1aacf2`)
    
    chord = await chordlagu.json()
	    
await m.reply(m.chat, chord.result.chord, m)
	}
	catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
//end

}
handler.help = ['chord','chordlagu']
handler.tags = ['tools']
handler.command = ['chord','chordlagu']
handler.premium = false
handler.diamond = true

export default handler