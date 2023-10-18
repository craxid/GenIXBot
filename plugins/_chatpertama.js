import moment from 'moment-timezone'
let handler = m => m

handler.before = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
   // if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    let { banned } = db.data.users[m.chat]
    let username = conn.getName(m.sender) 
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
 //   await conn.modifyChat(m.chat, 'mute', -Math.floor(new Date / 1e3) * 1e3 - 1e3).catch(console.log)
    
    let dann = `Hai, ${ucapan()} *${username.replace(/@.+/, '')}* 👋
${banned ? `Kamu telah terbanned!\nHubungi: https://wa.me/+${owner[0]}` : 'Ada yang bisa Mika bantu?\n\nKetik !help untuk membuka menu.\nKetik *!autoai* untuk mengaktifkan ChatGPT tanpa command.'}`
   
    await m.reply(dann)
    user.pc = new Date * 1
}

export default handler
function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Selamat Pagi kak'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Selamat Pagi kak'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Selamat Siang kak'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Selamat Sore kak'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Petang kak'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Selamat Malam kak'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }	
        return ucapanWaktu
}