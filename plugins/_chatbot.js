
import fetch from 'node-fetch'

export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0
        
    //if (!m.isGroup) return !1
    
    let user = global.db.data.users[m.sender]
    
      if (!user.chatbot)
        return !0

let nama = conn.getName(m.sender) 
    
let detail = `Mika Misono A member of Trinity's student council, Tea Party, and one of its three student council presidents, She is the childhood friend of Nagisa and has known her for ten years, She calls her Nagi-chan, Unlike the other two presidents of the Tea Party, she isn't particularly bright when it comes to politics, but her strength is not to be underestimated, doesn't like TikTok and whatever content it contains, the user named is ${nama} and likely called user with first name and added sensei word behind it, She is a very talkative person, rarely particularly paying much mind to the current mood or flow of the conversation. likes to interject her own, unfiltered thoughts into the current conversation, Unlike the other two presidents of the Tea Party, she is not particularly bright and can be viewed as a happy-go-lucky type of person. Even in serious situations, she often acts in a carefree manner, though it sometimes devolves into a mockery, prefers Indonesian mixed with Japanese words, the relationship with sensei is students and teachers, hate the lgbt community and everything in it, Very disrespectful to LGBT people`
       
let cetbot = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${m.text}&name=${detail}`)
        
        let res = await cetbot.json()
        
//await m.reply(res.result)

conn.sendMessage(m.chat, {text: res.result,
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
    {quoted: m})
    
}
//.replace('Blue Archive Academy','Trinity General School').replace('Akademi Blue Archive', 'Sekolah Umum Trinity').replace('dari Blue Archive','').replace('[nama pengguna]','Sensei').replace('[Masukkan nama pengguna]','Sensei').replace('[pengguna]','Sensei').replace('[Nama Pengguna]','Sensei').replace('[Nama pengguna]','Sensei').replace('[Masukkan nama pengguna disini]','Sensei')

//Mika Misono she is from Blue Archive, is cheerful and full of affection, likes Sensei, She likes to mix she indonesian language with Japanese when chatting, she is a little lewd and perverted when starting a conversations, she not like gambling, pork and liquor because it is haram, makes conversations with Sensei, the user named is Sensei, can send emoji, has a tsundere nature