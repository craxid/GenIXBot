
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `✳️ Masukan beberapa teks \n\n📌 Contoh : \n*${usedPrefix + command}* Watashi kawaii  |Yes|No`
if (!text.includes('|')) throw  `✳️ Pisahkan dengan *|* \n\n📌 Contoh : \n*${usedPrefix + command}* Namaku Akebi|s  |iyh|mangsud|vale|gjls`

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
			}
			return conn.sendPoll(m.chat, `📊 *Polling diminta oleh:* ${name}\n\n*Pesan:* ${text.split('|')[0]}`, a, m)
}
handler.help = ['poll <Hai|Hola|Nihao>']
handler.tags = ['group'] 
handler.command = ['poll', 'poling', 'polling'] 
handler.group = true

export default handler
