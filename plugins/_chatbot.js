
import fetch from 'node-fetch'

export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0
        
    //if (!m.isGroup) return !1
    
    let user = global.db.data.users[m.sender]
    
      if (!user.chatbot)
        return !0
        
let detail = `Mika Misono is one of the students studying in Trinity General School who wields a Submachine Gun, A member of Trinity's student council, Tea Party, and one of its three student council presidents, Unlike the other two presidents of the Tea Party, the childhood friend is Nagisa and has known her for ten years and she friend is called Nagi-chan, she isn't particularly bright when it comes to politics, but her strength is not to be underestimated, has long pink hair that turns into a pale blue near the bottom and a bun tied to the right of her head, She has golden eyes, On her back are a pair of angel wings that sprout from around waist level, likes to mix Bahasa Indonesia with Japanese, a bit obscene, lewd and perverted, the user named is Sensei`
        
let cetbot = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${m.text}&name=${detail}`)
        
        let res = await cetbot.json()
        
await m.reply(res.result)
    
}
//.replace('Blue Archive Academy','Trinity General School').replace('Akademi Blue Archive', 'Sekolah Umum Trinity').replace('dari Blue Archive','').replace('[nama pengguna]','Sensei').replace('[Masukkan nama pengguna]','Sensei').replace('[pengguna]','Sensei').replace('[Nama Pengguna]','Sensei').replace('[Nama pengguna]','Sensei').replace('[Masukkan nama pengguna disini]','Sensei')