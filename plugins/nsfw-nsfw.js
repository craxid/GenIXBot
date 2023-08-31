
/*import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {
	
	if (!global.db.data.chats[m.chat].nsfw) throw `🚫 Grup ini tidak mengizinkan konten nsfw \n\n Untuk mengubahnya \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 17) throw m.reply(`❎ Kamu masih dibawah umur, Kamu harus berusia setidaknya 18 tahun untuk menggunakan perintah ini`) 
   
m.react(rwait)
let type = (command).toLowerCase()

switch (type) {

case 'ass':
case 'pantat':
case 'pantad':
    let as = await conn.getFile(global.API('fgmods', '/api/nsfw/ass', { }, 'apikey'))
    conn.sendFile(m.chat, as.data, 'img.jpg', `✅ Random ${command}`, m)
    m.react(xmoji) 
break

case 'boobs':
case 'boobies':
   let xb = await conn.getFile(global.API('fgmods', '/api/nsfw/boobs', { }, 'apikey'))
   conn.sendFile(m.chat, xb.data, 'img.jpg', `✅ Random ${command}`, m)
   m.react(xmoji) 
break

case 'pussy':
   let xp = await conn.getFile(global.API('fgmods', '/api/nsfw/pussy', { }, 'apikey'))
   conn.sendFile(m.chat, xp.data, 'img.jpg', `✅ Random ${command}`, m)
   m.react(xmoji) 
break

case 'lesbians':
case 'lesbian':
   let les = await conn.getFile(global.API('fgmods', '/api/nsfw/lesbian', { }, 'apikey'))
   conn.sendFile(m.chat, les.data, 'img.jpg', `✅ Random ${command}`, m)
   m.react(xmoji) 
break

case 'pack':
case 'cosplay':
	     let img = await conn.getFile(global.API('fgmods', '/api/nsfw/cosplay', {}, 'apikey'))
        conn.sendFile(m.chat, img.data, 'img.jpg', `✅ Hasil 🤭`, m)
	     m.react(xmoji) 
	break


default:
 }
}
handler.help = ['ass', 'boobs', 'lesbian', 'pussy', 'pack']
handler.tags = ['nsfw','prem']
handler.command = /^(ass|culos|boobs|boobies|lesbian|lesbians|pussy|cosplay|pack)$/i
handler.diamond = true
handler.premium = true
handler.register = true
handler.group = false

export default handler
*/