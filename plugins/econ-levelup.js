
import { canLevelUp, xpRange } from '../lib/levelling.js'
let handler = async (m, { conn }) => {
	  let name = conn.getName(m.sender)
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/1ZxrXKJ/avatar-contact.jpg')
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        let txt = `
┌───⊷ *LEVEL*
▢ NAMA: *${name}*
▢ Level: *${user.level}*
▢ XP: *${user.exp - min}/${xp}*
▢ Rank: *${user.role}*
└──────────────

Kurang *${max - user.exp}* *XP* untuk naik level
`.trim()
try {
  let imgg = API('fgmods', '/api/maker/rank', {
    username: name,
    xp: user.exp - min,
    exp: xp,
    avatar: pp,
    level: user.level,
    ranklog: 'https://i.ibb.co/7gfnyMw/gold.png',
    background: 'https://raw.githubusercontent.com/craxid/moncrot/main/src/akebi_lvlup.jpg'
}, 'apikey')

    conn.sendFile(m.chat, imgg, 'level.jpg', txt, m)
} catch (e) {
    m.reply(txt)
}
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
    	user.role = global.rpg.role(user.level).name

        let str = `
┌─⊷ *NAIK LEVEL*
▢ Level sebelumnya: *${before}*
▢ Level sekarang: *${user.level}*
▢ Rank: *${user.role}*
└──────────────

*_Semakin banyak Kamu berinteraksi dengan bot, semakin tinggi level Kamu_*
`.trim()
        try {
            let img = API('fgmods', '/api/maker/levelup', { 
                avatar: pp 
             }, 'apikey')
      conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['econ']
handler.command = ['tingkat', 'lvlup', 'levelup', 'level'] 

export default handler
