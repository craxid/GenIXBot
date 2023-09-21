
let handler = async(m, { conn, usedPrefix, command }) => {
	let girl = await conn.getFile('https://api.zahwazein.xyz/randomimage/cecan?apikey=zenzkey_f59c1aacf2')
	let img = girl.data
   await conn.sendFile(m.chat, img, 'img.jpg', ``, m)
}
handler.help = ['girl']
handler.tags = ['img']
handler.command = ['girl', 'woman','cewek']
handler.diamond = true

export default handler
