/*import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let name = conn.getName(m.sender)
  if (!text) throw `Hai kak *${name}* mau ngobrol denganku? \nTanggapi dengan *${usedPrefix + command}* (isi pesan) \n\n📌 Contoh : *${usedPrefix + command}* Halo Mika`
  m.react('🗣️') 
  
  let res = await fetch(global.API(`https://api.yanzbotz.my.id/api/ai/characterai?id=id3xBWK9-mcu8Y8JOQjbKzzAmOzgGgmp8HomTp-UOq8&query=${text}`))
  
  let json = await res.json()
  if (json.success) m.reply(json.success.replace('simsimi', 'DyLux').replace('Simsimi', 'DyLux').replace('sim simi', 'DyLux'))
  else throw json
}
handler.help = ['simi <teks>']
handler.tags = ['fun']
handler.command = ['sim', 'simi','akebi'] 
handler.diamond = 2

export default handler
*/