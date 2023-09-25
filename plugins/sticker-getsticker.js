
import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ Enter a sticker name \n\n📌 *Example:*\n${usedPrefix + command} Patrick Star`
    
    //Resultados de https://getstickerpack.com/
    try {
   /*let res = await fetch(global.API('zenz', '/searching/stickersearch', { q:text }, 'apikey'))
   let json = await res.json()*/
   let json = await (`https://vihangayt.me/search/sticker?q=${text}`)
   
     /*let res = await fetch(`https://api.zahwazein.xyz/searching/stickersearch?apikey=zenzkey_f59c1aacf2&query=${text}`)
   let json = await res.json()*/
   
    m.reply(`
✅ Results

▢ *Title:* ${json.title}
▢ *Total stickers:* ${json.sticker_url.length}
▢ *Time:* _*${json.sticker_url.length * 2} s*_`)
    for (let i of json.sticker_url) {
        const stiker = await sticker(false, i, global.packname, global.author)
        await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
        //await delay(1500)
    }
    } catch (e) {
	m.reply(`❇️ Error: try another`)
	} 
}
handler.help = ['getsticker']
handler.tags = ['sticker']
handler.command = ['getsticker', 'getstick', 'stickersearch', 'sticksearch'] 
handler.diamond = 3

export default handler

const delay = time => new Promise(res => setTimeout(res, time))
