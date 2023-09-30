
import fetch from 'node-fetch'

export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0
        
    //if (!m.isGroup) return !1
    
    let user = global.db.data.users[m.sender]
    
      if (!user.chatbot)
        return !0
        
        let api = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${m.text}&name=Misono%20Mika%20(Blue%20Archive)`)
        
        let res = await api.json()
        
        m.reply(res.result).replace('Blue Archive Academy','Trinity General School')
    
}
