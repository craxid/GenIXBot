
import moment from 'moment-timezone'
let handler = async (m, { conn }) => {
let name = await conn.getName(m.sender)
let thumb = 'https://telegra.ph/file/bd044275940ed1b62efcd.jpg'
let mikapp = 'https://telegra.ph/file/a9a78b769836fe10fa62d.jpg'

let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, dateCountdown, wib, wit, wita, time, totalmem, totalreg, rtotalreg, platformInfo, freemem, infomem, role,
      readmore: readMore
    }

let mika = `
%ucapan ${name} 👋\nAda yang bisa ${global.packname} bantu?\n\nKetik !help untuk membuka Menu
`

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let username = conn.getName(who)
    
conn.sendMessage(m.chat, {
text: mika,
contextInfo: {
externalAdReply: {
title: (`${username}`),
body: ('Aku Online Kak!'),
thumbnailUrl: mikapp,
sourceUrl: ('https://www.facebook.com/dede2015k'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
}
handler.customPrefix = /^(bot|bot?|bott|mika|oy|bang|banh)$/i
handler.command = new RegExp

export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Dini kak"
  if (time >= 4) {
    res = "Pagi kak"
  }
  if (time >= 10) {
    res = "Siang kak️"
  }
  if (time >= 15) {
    res = "Sore kak"
  }
  if (time >= 18) {
    res = "Malam kak"
  }
  return res
}