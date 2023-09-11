//import db from '../lib/database.js'

export function before(m) {
    let user = global.db.data.users[m.sender]
    
    if (user.afk > -1) {
        let afk = `
  ✅ Berhenti AFK
${user.afkReason ? ' \n▢ *Alasan :* ' + user.afkReason : ''}
▢ *AFK sejak :* ${(new Date - user.afk).toTimeString()}
  `
  conn.sendMessage(m.chat, {
text: afk,
contextInfo: {
externalAdReply: {
title: ('Mika Misono Bot'),
body: ('Jangan Spam Bot!'),
thumbnailUrl: mikapp,
sourceUrl: ('https://www.facebook.com/dede2015k'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}}).trim()

        user.afk = -1
        user.afkReason = ''
    }
    
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        
        let aefka =`
💤 Orang yang kamu tag sedang AFK

${reason ? '▢ *Alasan* : ' + reason : '▢ *Alasan* : Tanpa alasan'}
▢ *AFK sejak :* ${(new Date - afkTime).toTimeString()}
  `
  
  conn.sendMessage(m.chat, {
text: aefka,
contextInfo: {
externalAdReply: {
title: ('Mika Misono Bot'),
body: ('Jangan Spam Bot!'),
thumbnailUrl: mikapp,
sourceUrl: ('https://www.facebook.com/dede2015k'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}}).trim()
  
    }
    return true
}
