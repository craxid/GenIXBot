
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Masukkan Teks\n\nContoh: !bard Siapa pendiri WhatsApp`
m.react('💬')

	try {
	    let bard = await fetch(`https://api.azz.biz.id/api/bard?q=${text}&key=mangea`)
     ;
        let res = await bard.json()
        
//await m.reply(res.respon)

conn.sendMessage(m.chat, {text: res.respon.replace('Azz-ai','Mika Bot').replace('yang terdiri dari Miftah dan Riki', 'dari ZuroX Project').replace('Miftah dan Riki','ZuroX Project'),
contextInfo: {
    "externalAdReply": {
        "title": global.namebot,
        "body": ('ChatGPT AI'),
        "showAdAttribution": true,
        "mediaType": 1,
        "sourceUrl": global.fgig,
        "thumbnailUrl": global.ppmika,
        "renderLargerThumbnail": false
    }}}, 
    {quoted: m})
        
	} catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}

}
handler.help = ['bard <text>']
handler.tags = ['ai']
handler.command = ['bard','bardai']
handler.premium = false
handler.diamond = true

export default handler
