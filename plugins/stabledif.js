
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Membuat Gambar AI menggunakan perintah yang diberikan pengguna\n\nContoh: !stabledif 1girls`
m.react('💬')

//code area
case 'stabledif':
     let res = await fetch(`https://api.zayn-c.my.id/ai-diffusion?text=${text}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error'
    conn.sendFile(m.chat, json.result.url, 'img.jpg', `✅ tes`, m)
	     m.react(animoji) 
break
default
//end

}
handler.help = ['stabledif <text>']
handler.tags = ['ai']
handler.command = ['diff2','stabledif']
handler.premium = false
handler.diamond = 3

export default handler

/*let gpt = await fetch(`https://api.azz.biz.id/api/gpt?q=${text}&key=mangea`)*/