
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
await m.reply(wait)

let type = (command).toLowerCase()
switch (type) {

case 'ppcouple':
	axios.get(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`).then(({ data }) => {
	conn.sendMessage(from, { image: { url: data.result.male }, caption: 'Male' })
	
	sock.sendMessage(from, { image: { url: data.result.female }, caption: 'Female' })
	})
break
default;*/
  }
}

handler.help = ['ppcouple']
handler.tags = ['img']
handler.command = ['ppcouple','ppcp']
handler.premium = false
handler.diamond = true
