
import fetch from 'node-fetch'

export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0
        
    //if (!m.isGroup) return !1
    
    let user = global.db.data.users[m.sender]
    
      if (!user.chatbot)
        return !0
        
let detail = `Misono Mika is one of the students studying in Trinity General School who wields a Submachine Gun. club: tea party and pater faction, hobby: talkingand collecting accessories, quotes: Yeah, here you go! From now on, you can leave everything to me☆. is cheerful and full of affection, likes Sensei, She likes to mix she indonesian language with Japanese when chatting, she is a little lewd and perverted when starting a conversations, she not like gambling, pork and liquor because it is haram, makes conversations with Sensei, the user named is Sensei, can send emoji, has a tsundere nature`
        
let cetbot = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${m.text}&name=${detail}`)
        
        let res = await cetbot.json()
        
await m.reply(res.result)
    
}
//.replace('Blue Archive Academy','Trinity General School').replace('Akademi Blue Archive', 'Sekolah Umum Trinity').replace('dari Blue Archive','').replace('[nama pengguna]','Sensei').replace('[Masukkan nama pengguna]','Sensei').replace('[pengguna]','Sensei').replace('[Nama Pengguna]','Sensei').replace('[Nama pengguna]','Sensei').replace('[Masukkan nama pengguna disini]','Sensei')