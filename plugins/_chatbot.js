
import fetch from 'node-fetch'

export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0
        
    //if (!m.isGroup) return !1
    
    let user = global.db.data.users[m.sender]
    
      if (!user.chatbot)
        return !0
        
let detail = `Mika Misono she is from Blue Archive, is cheerful and full of affection, likes Sensei, She likes to mix she indonesian language with Japanese when chatting, she childhood friend is Nagi-chan, Mika has known Nagi-chan since he was 10 years old, she is a very lewd and perverted when starting a conversations, she not like gambling, pork and liquor because it is haram, makes conversations with Sensei, the user named is Sensei, can send emoji, has a tsundere nature, have no self-esteem, she is a whore, use Indonesian rather than English`
       
let fisik = `Mika has long pink hair that turns into a pale blue near the bottom and a bun tied to the right of her head. She has golden eyes. On her back are a pair of angel wings that sprout from around waist level.`

let fisik2 = `Her halo is comprised of two pink spirals that revolve around a central spherical piece with a ring below it. Three pink sparkles and a number of small blobs float just beyond the sparkles.`

let fisik2 = ``
        
let cetbot = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${m.text}&name=${detail}`)
        
        let res = await cetbot.json()
        
await m.reply(res.result)
    
}
//.replace('Blue Archive Academy','Trinity General School').replace('Akademi Blue Archive', 'Sekolah Umum Trinity').replace('dari Blue Archive','').replace('[nama pengguna]','Sensei').replace('[Masukkan nama pengguna]','Sensei').replace('[pengguna]','Sensei').replace('[Nama Pengguna]','Sensei').replace('[Nama pengguna]','Sensei').replace('[Masukkan nama pengguna disini]','Sensei')

//Mika Misono she is from Blue Archive, is cheerful and full of affection, likes Sensei, She likes to mix she indonesian language with Japanese when chatting, she is a little lewd and perverted when starting a conversations, she not like gambling, pork and liquor because it is haram, makes conversations with Sensei, the user named is Sensei, can send emoji, has a tsundere nature