
let ro = 3000
let handler = async (m, { conn, usedPrefix, command}) => {
    let time = global.db.data.users[m.sender].lastrob + 900000
    if (new Date - global.db.data.users[m.sender].lastrob < 900000) throw `⏱️ Tunggu *${msToTime(time - new Date())}* untuk kembali merampok`
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    if (!who) throw `✳️ Tag seseorang untuk dirampok`
    if (!(who in global.db.data.users)) throw `✳️ Pengguna tidak ada di database`
    let users = global.db.data.users[who]
    let rob = Math.floor(Math.random() * ro)
    if (users.exp < rob) return m.reply(`🔖 Si @${who.split`@`[0]} miskin\nSebaiknya jangan gegabah`, null, { mentions: [who] })    
   global.db.data.users[m.sender].exp += rob
   global.db.data.users[who].exp -= rob
  
    m.reply(`
  ‣ Merampok *${rob} XP* dari @${who.split`@`[0]}
  `, null, { mentions: [who] })
    global.db.data.users[m.sender].lastrob = new Date * 1
  }

  handler.help = ['rampok']
  handler.tags = ['econ']
  handler.group = true
  handler.command = ['rampok', 'rob']
  
  export default handler
  
  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
  
    return minutes + " Menit " + seconds + " Detik"
  }
  
