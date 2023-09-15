/*
import fg from 'api-dylux'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ Cara penggunaan\n *${usedPrefix + command}* https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=`
    m.react(rwait)
    let res = await fg.igdl(args[0])
    for (let result of res.url_list) {
    conn.sendFile(m.chat, result, 'igdl.mp4', `✅ Done`, m)
    m.react(done)
  }
}
handler.help = ['instagram <link ig>']
handler.tags = ['dl']
handler.command = ['ig', 'igdl', 'instagram', 'igimg', 'igvid'] 
handler.diamond = true

export default handler 
*/

import fetch from "node-fetch"

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan URL!\n\nContoh: ${usedPrefix + command} https://api.arifzyn.biz.id/api/download/instagram?url=`
  await m.reply(wait)
  
  let dann = await fetch(`https://api.arifzyn.biz.id/api/download/instagram?url=${text}`)
  let res = await dann.json()
  
  conn.sendFile(m.chat, res.result.media, 'ig.mp4', 'Done kak!', m)
}

handler.help = ['ig']
handler.tags = ['dl']
handler.command = /^(ig(dl)?)|(instagram(dl)?)$/i
handler.register = true
handler.diamond = true

export default handler