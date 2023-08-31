
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
m.react(rwait)

let type = (command).toLowerCase()

switch (type) {

case 'randomanime':
	     let ranime = await conn.getFile(global.API('zenz', `/randomanime/${command}`, { }, 'apikey'))
	     
	     conn.sendFile(m.chat, ranime.data, 'img.jpg', `✅ Random Anime: ${command}`, m)
	     m.react(animoji) 
break

case 'waifu':
     let res = await fetch(`https://nekos.life/api/v2/img/waifu`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error'
    conn.sendFile(m.chat, json.url, 'img.jpg', `✅ Random Anime`, m)
	     m.react(animoji) 
break

case 'husbu':
    let husbu = await conn.getFile(global.API('zenz', `/randomanime/husbu`, { }, 'apikey'))
	     conn.sendFile(m.chat, husbu.data, 'img.jpg', `✅ Random Anime: ${command}`, m)
	     m.react(animoji) 
break

case 'neko': 
case 'nekos':
 let neko = await conn.getFile(global.API('zenz', `/randomanime/neko`, { }, 'apikey'))
	     conn.sendFile(m.chat, neko.data, 'img.jpg', `✅ Random Anime: ${command}`, m)
	     m.react(animoji) 
break  

case 'couples':
case 'couple':
 let kapel = await conn.getFile(global.API('zenz', `/randomanime/couples`, {}, 'apikey'))
        conn.sendFile(m.chat, kapel.result.male, "", m, { caption: "Random Anime Couples Male" })
        
        conn.sendFile(m.chat, kapel.result.female, "", m, { caption: "Random Anime Couples Female" })
 
	     m.react(animoji) 
break  

default:
 }
}

handler.help = ['randomanime','waifu','couple','husbu','neko','nekos','marin-kitagawa']
handler.tags = ['nime']
handler.command = ['randomanime','waifu','couple','husbu','neko','nekos','marin-kitagawa']
handler.diamond = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
