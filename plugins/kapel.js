
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
await m.reply(wait)

let type = (command).toLowerCase()
switch (type) {

case 'ppcouple':
case 'ppcp':
	let fetch(`https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json`).then(({ data }) => {
	conn.sendMessage(from, { image: { url: data.result.male }, caption: 'Male' })
	
	conn.sendMessage(from, { image: { url: data.result.female }, caption: 'Female' })
	})
break
default;
  }
}

handler.help = ['ppcouple']
handler.tags = ['img']
handler.command = ['ppcouple','ppcp']
handler.premium = false
handler.diamond = true
