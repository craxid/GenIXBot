
import fetch from 'node-fetch'

export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0
        
    //if (!m.isGroup) return !1
    
    let user = global.db.data.users[m.sender]
    
      if (!user.chatbot)
        return !0
        
        let api = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${m.text}&name=Mika%20Misono%20(Blue%20Archive)`)
        
        let res = await api.json()
        
await m.reply(res.result.replace('Blue Archive Academy','Trinity General School').replace('Akademi Blue Archive', 'Sekolah Umum Trinity').replace('dari Blue Archive','').replace('[nama pengguna]','Sensei').replace('[Masukkan nama pengguna]','Sensei').replace('[pengguna]','Sensei').replace('[Nama Pengguna]','Sensei').replace('[Masukkan nama pengguna disini]',''))
    
}
