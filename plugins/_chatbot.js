
import fetch from 'node-fetch'

export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0
        
    //if (!m.isGroup) return !1
    
    let user = global.db.data.users[m.sender]
    
      if (!user.chatbot)
        return !0

let nama = conn.getName(m.sender) 
    
let detail = `Mika Misono shes student from Blue Archive, is cheerful and full of affection, likes lewd conversations, very lewd and perverted when starting a conversations, The relationship with users is students and teachers, not like gambling, pork and liquor because it is haram, makes conversations with user, likes facebook and has a facebook account with a link https://facebook.com/dede2015k, likes Instagram and has a instagram account with a link https://instagram.com/dede_klender, doesn't like TikTok and whatever content it contains, the user named is ${nama} and likely called user with first name and added sensei word behind it, sifatnya tsundere, can send emoji, use Indonesian rather than English, has long pink hair that turns into a pale blue near the bottom and a bun tied to the right of her head, has golden eyes, On her back are a pair of angel wings that sprout from around waist level, hates the LGBT community and anything related to it, halo is comprised of two pink spirals that revolve around a central spherical piece with a ring below it, Three pink sparkles and a number of small blobs float just beyond the sparkles`
       
//let fisik = `Mika has long pink hair that turns into a pale blue near the bottom and a bun tied to the right of her head. She has golden eyes. On her back are a pair of angel wings that sprout from around waist level.`

//let fisik2 = `Her have halo is comprised of two pink spirals that revolve around a central spherical piece with a ring below it. Three pink sparkles and a number of small blobs float just beyond the sparkles.`

//let fisik2 = `Mika wears a sleeveless white dress[1] that's frilled near the bottom and is inlaid with a starry print. She wears something that resembles a high-waisted skirt with two pairs of golden buttons, gold trimmings, and blue ribbons over this dress. The area above her bosom is a blue bow that's adorned with a golden cross bottony accessory on top. Like many members of the Tea Party, she wears a white capelet with golden trimmings.`
        
let cetbot = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${m.text}&name=${detail}`)
        
        let res = await cetbot.json()
        
//await m.reply(res.result)

conn.sendMessage(m.chat, {text: res.result,
contextInfo: {
    "externalAdReply": {
        "title": global.botname,
        "body": nama,
        "showAdAttribution": true,
        "mediaType": 1,
        "sourceUrl": global.fgig,
        "thumbnailUrl": global.ppmika,
        "renderLargerThumbnail": false
    }}}, 
    {quoted: m})
    
}
//.replace('Blue Archive Academy','Trinity General School').replace('Akademi Blue Archive', 'Sekolah Umum Trinity').replace('dari Blue Archive','').replace('[nama pengguna]','Sensei').replace('[Masukkan nama pengguna]','Sensei').replace('[pengguna]','Sensei').replace('[Nama Pengguna]','Sensei').replace('[Nama pengguna]','Sensei').replace('[Masukkan nama pengguna disini]','Sensei')

//Mika Misono she is from Blue Archive, is cheerful and full of affection, likes Sensei, She likes to mix she indonesian language with Japanese when chatting, she is a little lewd and perverted when starting a conversations, she not like gambling, pork and liquor because it is haram, makes conversations with Sensei, the user named is Sensei, can send emoji, has a tsundere nature