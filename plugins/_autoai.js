
import fetch from 'node-fetch'

export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0
        
    //if (!m.isGroup) return !1
    
    let user = global.db.data.users[m.sender]
    
      if (!user.autoai)
        return !0

let nama = conn.getName(m.sender) 
       
let cetbot = await fetch(`https://api.azz.biz.id/api/gpt?q=${m.text}&key=global`)
        
        let res = await cetbot.json()
        
await m.reply(res.respon.replace('Azz-ai','Mika Bot').replace('yang terdiri dari Miftah dan Riki', 'dari ZuroX Project').replace('Miftah dan Riki','ZuroX Project'))

/*conn.sendMessage(m.chat, {text: res.result,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
    "externalAdReply": {
        "title": global.botname,
        "body": nama,
        "mediaType": 1,
        "sourceUrl": global.fgig,
        "thumbnailUrl": global.ppmika,
        "renderLargerThumbnail": false
    }}}, 
    {quoted: m})*/
    
}