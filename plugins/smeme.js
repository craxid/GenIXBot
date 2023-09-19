
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix }) => {
    
switch (type) {
case 'smeme': 
case 'stickmeme':
case 'stikmeme':
case 'stickermeme':
case 'stikermeme': {
	let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	if (!/image/.test(mime)) throw respond
if (!text) throw respond
	  m.reply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	
	let fatGans = await uploadImage(img)
	
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans}`
	 
let stiker = await sticker(null, smeme, packname, author)       
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
	        await fs.unlinkSync(FaTiH)
            }
	       break
	       default;
}
handler.help = ['smeme']
handler.tags = ['sticker']
handler.command = /^smeme$/i

export default handler