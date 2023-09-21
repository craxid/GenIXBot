
import fetch from 'node-fetch'
let handler = async (m, { text }) => {
  let res = await fetch(global.API(`https://saipulanuar.ga/api/f/simi?text=${text}`))
  let json = await res.json()
  if (json.result) m.reply(json.result.replace('simi','Mika').replace(simisimk))
  else throw json
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler