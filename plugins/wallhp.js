
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
m.react(rwait)

let type = (command).toLowerCase()

switch (type) {

case 'wallhp':
case 'wallpaper':
case 'wphp':
	     let anime = await conn.getFile(global.API('zenz', `/randomimage/wallhp`, { }, 'apikey'))
	     conn.sendFile(m.chat, anime.data, 'img.jpg', `✅ ${command} Done`, m)
	     m.react(animoji) 
break

case 'wpanime':
let res = await fetch(`https://nekos.life/api/v2/img/wallpaper`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error'
    conn.sendFile(m.chat, json.url, 'img.jpg', `✅ Random wallpaper Anime`, m)
break

default:
 }
}
handler.help = ['wallhp','wallpaper','wphp','wpanime']
handler.tags = ['img']
handler.command = ['wallhp','wallpaper','wphp','wpanime']
handler.diamond = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
