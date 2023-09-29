
import fetch from 'node-fetch'
let handler = async (m, { text }) => {
  let res = await fetch(`https://api.zahwazein.xyz/entertainment/simisimi?text=${text}&apikey=zenzkey_f59c1aacf2`)
  let json = await res.json()
  
  if (json.result) m.reply(json.data, '')
  else throw json
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

export default handler
