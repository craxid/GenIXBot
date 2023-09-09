
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {

  let hasil = Math.floor(Math.random() * 2000)
  let time = global.db.data.users[m.sender].lastwork + 900000
  if (new Date - global.db.data.users[m.sender].lastwork < 900000) throw `*🧘🏻‍♂️ Kamu lelah* dan karena itu kamu harus menunggu *${msToTime(time - new Date())}* untuk kembali ${command}`

    /*let w = await axios.get(global.API('fgmods', '/api/work', { }, 'apikey'))
    let res = w.data.result*/
    
    let w = await fetch('https://telegra.ph/file/bd044275940ed1b62efcd.jpg')
    let anu = (await axios.get('https://raw.githubusercontent.com/craxid/craxid/main/nguli.json')).data
    let res = pickRandom(anu)
 global.db.data.users[m.sender].exp += hasil

  m.reply(`
‣ ${res.fgwork} *${hasil} XP*
`, ${global.ppmika})
  global.db.data.users[m.sender].lastwork = new Date * 1
}
handler.help = ['work']
handler.tags = ['econ']
handler.group = true
handler.command = ['work', 'kerja', 'nguli']

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
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
