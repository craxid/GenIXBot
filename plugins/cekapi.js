import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
    
try {
let zenz = await fetch(`https://api.zahwazein.xyz/user/cekapi?apikey=zenzkey_f59c1aacf2`)
let zenzapi = await zenz.json()

let tegs = `
${global.htki} *API Stalker* ${global.htka}
${global.gz} *Nama pengguna:* ${zenzapi.message.username}
${global.gz} *Apikey:* ${zenzapi.message.apikey}
${global.gz} *Dibuat pada:* ${zenzapi.message.created}
${global.gz} *Diupdate:* ${zenzapi.message.updated}
${global.gz} *Hit hari ini:* ${zenzapi.message.today_hit}
${global.gz} *Total Hit:* ${zenzapi.message.total_hit}
${global.gz} *Jenis akun:* ${zenzapi.message.premium_expired}
${global.sb}
`

conn.sendMessage(m.chat, {
text: tegs.replace('false / free user', 'Premium').replace('zenzkey_f59c1aacf2','*****'),
contextInfo: {
externalAdReply: {
title: (`API Stalker`),
body: (`${zenzapi.message.username}`),
thumbnailUrl: (`${zenzapi.message.profile_image}`),
sourceUrl: ('https://api.zahwazein.xyz/'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}})

	}
	catch {
		m.reply(`👾 erol`)
	}
}
handler.help = ['cekapi']
handler.command = /^(cek(key|api))$/i
handler.rowner = true
export default handler

//https://api.zahwazein.xyz/user/cekapi?apikey=zenzkey_f59c1aacf2