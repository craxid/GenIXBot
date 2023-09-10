
import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ User sudah terdaftar\n\nMau registrasi ulang?\n\n 📌 Gunakan command ini untuk unreg \n*${usedPrefix}unreg* <Nomor Seri>`
  if (!Reg.test(text)) throw `⚠️ Format salah\n\n ✳️ Cara menggunakan: *${usedPrefix + command} nama.umur*\n📌Contoh : *${usedPrefix + command}* ${name2}.14`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ Nama tidak boleh kosong'
  if (!age) throw '✳️ Umur tidak boleh kosong'
  if (name.length >= 30) throw '✳️ Umur terlalu tua' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Sepuh main bot 🙏'
  if (age < 5) throw '🚼  Ngapain dek main bot? mending nenen sono '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *PENDAFTARAN* 」─
▢ *Nama:* ${name}
▢ *Umur:* ${age} Tahun
▢ *Nomor seri:*
${sn}
└──────────────

 Ketik *${usedPrefix}help* untuk membuka menu
`.trim())
}
handler.help = ['reg'].map(v => v + ' <nama.umur>')
handler.tags = ['rg']

handler.command = [ 'reg', 'register', 'daftar'] 

export default handler

