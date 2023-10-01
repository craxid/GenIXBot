
import fetch from 'node-fetch'

export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0
        
    //if (!m.isGroup) return !1
    
    let user = global.db.data.users[m.sender]
    
      if (!user.chatbot)
        return !0
        
let detail = `Mika Misono is student in blue archive games, has a tsundere nature, is affectionate, likes sensei, kelakuannya sangat jejepangan, menggunakan bahasa gaul indonesia dibanding bahasa inggris, he's a bit perverted and lewd, make a conventation with Sensei, the user named is Sensei`
        
let cetbot = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${m.text}&name=${detail}`)
        
        let res = await cetbot.json()
        
await m.reply(res.result)
    
}
//.replace('Blue Archive Academy','Trinity General School').replace('Akademi Blue Archive', 'Sekolah Umum Trinity').replace('dari Blue Archive','').replace('[nama pengguna]','Sensei').replace('[Masukkan nama pengguna]','Sensei').replace('[pengguna]','Sensei').replace('[Nama Pengguna]','Sensei').replace('[Nama pengguna]','Sensei').replace('[Masukkan nama pengguna disini]','Sensei')