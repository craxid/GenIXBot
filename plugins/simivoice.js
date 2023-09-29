
import fetch from 'node-fetch'
let handler = async (m, { text }) => {
  let res = await fetch(`https://api.yanzbotz.my.id/api/ai/simivoice?query=${text}`)
  let json = await res.json()
  
  if (json.data) m.reply(m.chat, json.data, 'simi.opus', m)
  else throw json
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

export default handler
