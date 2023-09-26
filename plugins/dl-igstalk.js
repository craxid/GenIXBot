
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!text) throw `✳️ Masukan Username Instagram\n\n📌Contoh: ${usedPrefix + command} dede_klender` 
    try {
        
    let igestak = await fetch(`https://api.zahwazein.xyz/stalker/ig?username=${text}&apikey=zenzkey_f59c1aacf2`)
    
    let res = await igestak.json()
    
    let teks = `
┌──「 *STALKING* 
▢ *🔖 Name:* ${res.full_name} 
▢ *🔖 Username:* ${res.username}
▢ *👥 Followers:* ${res.followersH}
▢ *🫂 Following:* ${res.followingH}
▢ *📌 Bio:* ${res.result.biography}
▢ *🏝️ Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`

if (teks) return conn.sendMessage(m.chat, {
text: teks,
contextInfo: {
externalAdReply: {
title: ('Instagram Stalker'),
body: (`${res.username}`),
thumbnailUrl: (`${res.profilePic}`),
sourceUrl: (`https://www.instagram.com/${res.username.replace(/^@/, '')}`),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}})
     //await conn.sendFile(m.chat, res.profilePic, 'igstalk.png', teks, m)
      } catch {
        m.reply(`✳️ Pastikan nama pengguna ada di *Instagram*`)
      }
}
handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['igstalk','stalkig'] 

export default handler
