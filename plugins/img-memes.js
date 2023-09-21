/*
     ig : https://www.instagram.com/fg98._/
*/
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	
	
let mim = await getFile('https://api.zahwazein.xyz/randomimage/memeindo?apikey=zenzkey_f59c1aacf2')

	let mimme = mim.data
    conn.sendFile(m.chat, mimme, 'meme.jpg', '', m)
    m.react('😆') 
}
handler.help = ['meme']
handler.tags = ['img']
handler.command = ['meme', 'memes'] 
handler.diamond = true

export default handler
