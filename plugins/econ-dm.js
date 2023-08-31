//import db from '../lib/database.js'

const free = 30
const prem = 50

let handler = async (m, {conn, isPrems }) => {
  let timedm = global.db.data.users[m.sender].lastclaim + 86400000
  if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) throw `🎁 *Kamu sudah mengumpulkan Diamond untuk hari ini*\n\n🕚 Kembalilah dalam *${msToTime(timedm - new Date())}* `
  global.db.data.users[m.sender].diamond += isPrems ? prem : free
  m.reply(`
🎁 *DIAMOND REWARD*

▢ *Mendapat:*
💎 *DIAMOND:* +${isPrems ? prem : free}`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['claimdm']
handler.tags = ['econ']
handler.command = ['claimdm'] 

export default handler



function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Jam " + minutes + " Menit " + seconds + " Detik"
}

