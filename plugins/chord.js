

import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Mencari chord lagu dari perintah yang diberikan pengguna\n\nContoh: !chord iwan fals manusia setengah dewa`
m.reply(wait)

//code area
try {
    let chord = await fetch(`https://api.zahwazein.xyz/searching/chordlagu?query=${text}&apikey=zenzkey_f59c1aacf2`)
    
    chordlagu = await chord.json()
	    
conn.sendMessage(m.chat, chordlagu.result.chord, m)
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