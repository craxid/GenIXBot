//import db from '../lib/database.js'

let handler = async (m, { conn }) => {

  let hasil = Math.floor(Math.random() * 2000)
  let time = global.db.data.users[m.sender].lastmining + 900000
  if (new Date - global.db.data.users[m.sender].lastmining < 900000) throw `⏳ _Tunggu_ *${msToTime(time - new Date())}* _Untuk kembali menambang_`
  global.db.data.users[m.sender].exp += hasil
  m.reply(`
🎉 Kamu mendapat *XP* sebanyak *${hasil}*`)
  global.db.data.users[m.sender].lastmining = new Date * 1
}
handler.help = ['nambang']
handler.tags = ['econ']
handler.group = true
handler.command = ['nambang', 'mining', 'mine'] 

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return minutes + " menit " + seconds + " detik" 
}
