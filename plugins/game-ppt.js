//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let poin = 300
    let reseqv = `✳️ Pilih antara Batu/Gunting/Kertas\n\nContoh : *${usedPrefix + command}* Kertas\n`
    if (!text) throw reseqv
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'gunting'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'batu'
    } else {
        astro = 'kertas'
    }


    if (text == astro) {
      global.db.data.users[m.sender].exp += 100
        m.reply(`▢ *Seri*\n\n‣ Kamu : ${text}\n‣ Akebi : ${astro}\n\n🎁 Poin (±)100 XP`)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *KAMU MENANG* 🎊\n\n‣ Kamu : ${text}\n‣ Akebi : ${astro}\n\n🎁 Poin *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *KAMU KALAH*\n\n‣ Kamu : ${text}\n‣ Akebi : ${astro}\n\n Poin *-${poin} XP*`)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *MENANG* 🎊\n\n‣ Kamu : ${text}\n‣ Akebi : ${astro}\n\n🎁 Poin *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *KAMU KALAH*\n\n‣ Kamu : ${text}\n‣ Akebi : ${astro}\n\nPoin *-${poin} XP*`)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`▢ *KAMU MENANG* 🎊\n\n‣ Kamu : ${text}\n‣ Akebi : ${astro}\n\n🎁 Poin *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`▢ *KAMU KALAH*\n\n‣ Kamu : ${text}\n‣ Akebi : ${astro}\n\nPoin *-${poin} XP*`)
        }
    } else {
        throw reseqv
    }
}
handler.help = ['suitjepang <Batu/Kertas/Gunting>']
handler.tags = ['game']
handler.command = ['suitjepang','janken'] 
handler.register = false
handler.diamond = false

export default handler
