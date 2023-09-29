
import fetch from 'node-fetch'
let handler = async (m, { text }) => {
  let res = await getFile(`https://api.yanzbotz.my.id/api/ai/simivoice?query=${text}`)
  let json = await res.json()
  
conn.sendFile(m.chat, res.data, 'simi.opus', m)

  else throw json
}
handler.help = ['simivoice', 'simiv'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((simivoice)?simiv)$/i

export default handler
