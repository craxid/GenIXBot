/*
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {

  let hasil = Math.floor(Math.random() * 2000)
  let time = global.db.data.users[m.sender].lastwork + 900000
  if (new Date - global.db.data.users[m.sender].lastwork < 900000) throw `*🧘🏻‍♂️ Kamu lelah* dan karena itu kamu harus menunggu *${msToTime(time - new Date())}* untuk kembali ${command}`

    /*let w = await axios.get(global.API('fgmods', '/api/work', { }, 'apikey'))
    let res = w.data.result*//*
    let anu = (await axios.get('https://raw.githubusercontent.com/craxid/craxid/main/nguli.json')).data
    let res = pickRandom(anu)
 global.db.data.users[m.sender].exp += hasil

  m.reply(`
‣ ${res.fgwork} *${hasil} XP*
`)
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
*/

import { MessageType } from '@adiwajshing/baileys'

let handler = async (m, {conn, command, args, usedPrefix}) => {
let thumb = 'https://telegra.ph/file/bd044275940ed1b62efcd.jpg'
let type = (args[0] || '').toLowerCase()
let users = global.db.data.users[m.sender]
let __timers = (new Date - global.db.data.users[m.sender].lastwork)
let _timers = (604800000 - __timers) 
let timers = clockString(_timers)
let time = global.db.data.users[m.sender].lastjb + 300000
//let __timers = (new Date - global.db.data.users[m.sender].lastwork)
   // let _timers = (0 - __timers)
   // let timers = clockString(_timers) 
    //JANGAN DI OTAK ATIK
//PEMBATAS
let penumpan = ['mas mas','bapak bapak','cewe sma','bocil epep','emak emak']
let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let daganga = ['wortel','sawi','selada','tomat','seledri','cabai','daging','ikan','ayam']
let dagangan = daganga[Math.floor(Math.random() * daganga.length)]
let pasie = ['sakit kepala','cedera','luka bakar','patah tulang']
let pasien = pasie[Math.floor(Math.random() * pasie.length)]
let pane = ['Wortel','Kubis','stowbery','teh','padi','jeruk','pisang','semangka','durian','rambutan']
let panen = pane[Math.floor(Math.random() * pane.length)]
let bengke = ['mobil','motor','becak','bajai','bus','angkot','becak','sepeda']
let bengkel = bengke[Math.floor(Math.random() * bengke.length)]
let ruma = ['Membangun Rumah','Membangun Gedung','Memperbaiki Rumah','Memperbaiki Gedung','Membangun Fasilitas Umum','Memperbaiki Fasilitas Umum']
let rumah = ruma[Math.floor(Math.random() * ruma.length)]

let pppecat = ['Ruko Kebakaran','LO NGOCOK DIDEPAN UMUM','Males Malesan','Ngew istrinya yg punya ruko']
let alasanpecat = pppecat[Math.floor(Math.random() * pppecat.length)]
let ddppecat = ['Bakar Pasien','Jual Organ Dalem ke Lapak ilegal','serinv telat']
let alasanpasien = ddppecat[Math.floor(Math.random() * ddppecat.length)]
//Uang
let uangm = Math.floor(Math.random() * 10) + 4000
let duit = Math.floor(Math.random() * 20) + 2500
let duitm = Math.floor(Math.random() * 50) + 9500
let duitd = Math.floor(Math.random() * 62) + 5200
let duitr = Math.floor(Math.random() * 20) + 4200
let duitk = Math.floor(Math.random() * 70) + 7800
//ANJAY
let _pecat= `${pickRandom(['1', '1', '1', '1'])}`
            let pecat = (_pecat * 1)
            let ppecat = `KAMU KENA PECAT KARNA KAMU ${alasanpecat}`
let _dpecat = `${pickRandom(['1', '0', '0', '1'])}`
            let dpecat = (_dpecat * 1)
            let dppecat = `KAMU DI PECAT KARNA ${alasanpasien}`
//GAK RAPIH G GANTENG
//PEMBATAS\\
let kerjam = `
*🧪 Contoh:*
${usedPrefix+command} ojek

*🌟 Untuk Claim Pekerjaan ketik:*
${usedPrefix}selectjob ojek

*📝 List Kerja:*
🎐 Ojek
🎐 Dokter
🎐 Petani
🎐 Pedagang
🎐 Montir
🎐 Kuli
`.trim()
if (/kerjadulu|kerja|work/i.test(command)) {
switch(type) {
	case 'ojek':
	if (global.db.data.users[m.sender].ojek == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastwork < 300000)  throw `Kamu sudah bekerja\nTunggu  *${timers}* Untuk kembali bekerja ojek`
	global.db.data.users[m.sender].exp += uangm
global.db.data.users[m.sender].lastwork = new Date * 1
	m.reply(`Kamu Sudah Mengantarkan *${penumpang}*\nDan mendapatkan uang senilai *Rp ${uangm}*`)
break
     case 'pedagang':
     if (global.db.data.users[m.sender].pedagang == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastwork < 300000)  throw `Kamu sudah bekerja\nTunggu  *${timers}* Untuk kembali bekerja dagang`
	global.db.data.users[m.sender].exp += duit
global.db.data.users[m.sender].lastwork = new Date * 1
	m.reply(`Ada pembeli yg membeli *${dagangan}*\nDan mendapatkan uang senilai *Rp ${duit}*`)
	if (pecat > 1 ) {
                   global.db.data.users[m.sender].pedagang -= pecat * 1
                   m.reply(ppecat)
            }
break
      case 'dokter':
 if (global.db.data.users[m.sender].dokter == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastwork < 300000)  throw `Kamu sudah bekerja\nTunggu  *${timers}* Untuk kembali bekerja kdokter`
	global.db.data.users[m.sender].exp += duitm
global.db.data.users[m.sender].lastwork = new Date * 1
	m.reply(`Kamu menyembuhkan pasien *${pasien}*\nDan mendapatkan uang senilai *Rp ${duitm}*`)
break
       case 'petani':
if (global.db.data.users[m.sender].petani == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastwork < 300000)  throw `Kamu sudah bekerja\nTunggu  *${timers}* Untuk kembali bekerja petani`
	global.db.data.users[m.sender].exp += uangm
global.db.data.users[m.sender].lastwork = new Date * 1
	m.reply(`${panen} Sudah Panen ! Dan menjualnya\nDan mendapatkan uang senilai Rp *${duitd}*`)
break
     case 'montir':
 if (global.db.data.users[m.sender].montir == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastwork < 300000)  throw `Kamu sudah bekerja\nTunggu  *${timers}* Untuk kembali bekerja montir`
	global.db.data.users[m.sender].exp += duitr
global.db.data.users[m.sender].lastwork = new Date * 1
	m.reply(`Kamu Baru saja mendapatkan pelanggan dan memperbaiki *${bengkel}*\nDan kamu mendapatkan uang senilai *Rp ${duitr}*`)
break
      case 'kuli':
 if (global.db.data.users[m.sender].kuli == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastwork < 300000)  throw `Kamu sudah bekerja\nTunggu  *${timers}* Untuk kembali bekerja kuli`
	global.db.data.users[m.sender].exp += duitk
global.db.data.users[m.sender].lastwork = new Date * 1
	m.reply(`Kamu baru saja selesai ${rumah}\nDan mendapatkan uang senilai *Rp ${duitk}*`)
break
default:
                        return conn.sendFile(m.chat, thumb, 'kerja.jpg', `${kerjam}`, m)
                }
                }
                
                }
// Dann Official
handler.help = ['kerja','work']
handler.tags = ['rpg']
handler.command = /^kerja$/i
handler.group = true

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
     let h = Math.floor(ms / 3600000)
     let m = Math.floor(ms / 60000) % 60
     let s = Math.floor(ms / 1000) % 60
     console.log({ms,h,m,s})
     return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
   }