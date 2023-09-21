
let handler = async(m, { conn, usedPrefix, command }) => {
	
    let img = await conn.getFile('https://api.zahwazein.xyz/randomasupan/asupan?apikey=zenzkey_f59c1aacf2')
    let asupan = img.data
    conn.sendFile(m.chat, asupan, 'vid.mp4', `✅ Done`, m)
    m.react(dmoji)
    
}
handler.help = ['tvid']
handler.tags = ['img']
handler.command = ['asupan', 'tvid', 'videos', 'vid', 'video']
handler.premium = false
handler.diamond = true

export default handler
