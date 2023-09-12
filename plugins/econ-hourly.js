
//import db from '../lib/database.js'

const free = 500
const prem = 1000

let handler = async (m, {conn, isPrems }) => {
  let timehourly = global.db.data.users[m.sender].claimhourly + 3600000
  if (new Date - global.db.data.users[m.sender].claimhourly < 3600000) throw `🎁 *Kamu sudah mengumpulkan hadiah*\n\n🕚 Kembalilah dalam *${msToTime(timehourly - new Date())}* `
  global.db.data.users[m.sender].exp += isPrems ? prem : free
  m.reply(`
🎁 *HOURLY REWARD*

▢ *Mendapat:*
🆙 *XP* : +${isPrems ? prem : free}`)
  global.db.data.users[m.sender].claimhourly = new Date * 1
}
handler.help = ['hourly']
handler.tags = ['econ']
handler.command = ['hourly'] 

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

