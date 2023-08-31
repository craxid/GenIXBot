import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let name = conn.getName(m.sender)
  if (!text) throw `✳️ *Contoh :*\n\n *${usedPrefix + command}* Halo`
  m.react('🫣') 
  let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "id" }, ''))
  //let res = await fetch(`https://api.zahwazein.xyz/entertainment/simisimi?apikey=zenzkey_f59c1aacf2&text=${text}`)
  /*let res = await fetch(global.API('https://api.zahwazein.xyz', '/entertainment/simisimi/?apikey=zenzkey_f59c1aacf2&text=', { text: encodeURIComponent(text), lc: "id" }, ''))*/
  let json = await res.json()
  if (json.success) 
m.reply(`≡ *SIMSIMI*
 
▢ *Kamu:* ${text}
▢ *Simi:* ${json.success.replace('simsimi', 'DyLux').replace('Simsimi', 'DyLux').replace('sim simi', 'DyLux')}`) 
  else throw json
}

handler.help = ['simi']
handler.tags = ['fun']
handler.command = ['sim', 'simi'] 
handler.diamond = 1

export default handler
