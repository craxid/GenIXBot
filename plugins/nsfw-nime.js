
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {
	
	if (!global.db.data.chats[m.chat].nsfw) throw `🚫 Chat ini tidak menginzinkan konten nsfw \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 17) throw m.reply(`❎ Kamu masih dibawah umur, setidaknya berumur 18 tahun  untuk menggunakan fitur ini`)
   
   m.react(rwait)
let type = (command).toLowerCase()
switch (type) {
/*
	
	//-- nsfw tipo anime
	case 'xwaifu':
        let xwai = await fetch(`https://waifu.pics/api/nsfw/waifu`)
        if (!xwai.ok) throw await xwai.text()
        let xwfu = await xwai.json()
        if (!xwfu.url) throw '❎ Error'
        conn.sendFile(m.chat, xwai.url, 'img.jpg', `✅ Random ${command}`, m)
        m.react(xmoji)    
  break

case 'blowjob':
case 'trap':
  let res = await fetch(`https://waifu.pics/api/nsfw/${command}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error'
    conn.sendFile(m.chat, json.url, 'img.jpg', `✅ Random ${command}`, m)
    m.react(xmoji) 
break

case 'yuri':
case 'cum':
case 'xneko':
    let as = await conn.getFile(global.API('fgmods', `/api/nsfw-nime/${command}`, { }, 'apikey'))
    conn.sendFile(m.chat, as.data, 'img.jpg', `✅ Random ${command}`, m)
    m.react(xmoji) 
break

case 'hentai':
    let he = pickRandom(['yuri', 'cum', 'xneko', 'blowjob', 'ass', 'pussy'])
    let les = await conn.getFile(global.API('fgmods', `/api/nsfw-nime/${he}`, { }, 'apikey'))
    conn.sendFile(m.chat, les.data, 'img.jpg', `✅ Random ${command}`, m)
    m.react(xmoji) 
break

default:*/

case 'ahegao':
case 'ass':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'hentai':
case 'maid':
case 'manga':
case 'yuri':
case 'blowjob':
case 'netorare':
case 'pussy':
case 'panties':
let anime = await conn.getFile(global.API('zenz', `/api/morensfw/${command}`, { }, 'apikey'))
	     
	     conn.sendFile(m.chat, anime.data, 'img.jpg', `*✅ Random Anime NSFW:* ${command}`, m)
	     
	     m.react(sange) 
break

case 'hentaigif':

let hengif = await conn.getFile(global.API('zenz', `/api/morensfw/hentaigif`, { }, 'apikey'))

	     
	     conn.sendFile(m.chat, hengif.data, 'img.gif', `*✅ Random Anime NSFW:* ${command}`, m)
	     
	     m.react(sange) 
break


 }

}
handler.help = ['ahegao','netorare','ass','bdsm','blowjob','cuckold','cum','ero','femdom','foot','gangbang','glasses','hentai','maid','manga','yuri','blowjob','pussy','panties','milf','hentaigif']
handler.tags = ['ansfw']
handler.command = ['ahegao','netorare','ass','bdsm','blowjob','cuckold','cum','ero','femdom','foot','gangbang','glasses','hentai','maid','manga','yuri','blowjob','pussy','panties','milf','hentaigif']
handler.diamond = 3
handler.register = true
handler.premium = true
export default handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
