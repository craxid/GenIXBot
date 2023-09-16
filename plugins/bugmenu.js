
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import fs from 'fs'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let { limit, role, level, exp, premiumTime } = db.data.users[m.sender]
  let name = await conn.getName(m.sender)
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let ucpn = `${ucapan()}`
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/bd044275940ed1b62efcd.jpg")
  let bugmenu = ` 
█ ❏ *Name:* ${name}
█ ❏ *Tag:* ${tag}
█ ❏ *Status:* ${premiumTime > 0 ? 'Premium' : 'Free user' }
█ ❏ *Limit:* ${limit}
█ ❏ *Role:* ${role}
█ ❏ *Level:* ${level}
█ ❏ *XP:* ${exp}
█▓▓
         
╔════ 「 Bug Emote 」 ════╗
║❏➣ ${usedPrefix}🌹 628xxxx
║❏➣ ${usedPrefix}🌻 628xxxx
║❏➣ ${usedPrefix}😎 628xxxx
║❏➣ ${usedPrefix}👽 628xxxx
║❏➣ ${usedPrefix}🗿 628xxxx
║❏➣ ${usedPrefix}😃 628xxxx
║❏➣ ${usedPrefix}💀 628xxxx
║❏➣ ${usedPrefix}😅 628xxxx
║❏➣ ${usedPrefix}🥶 628xxxx
║❏➣ ${usedPrefix}®️ 628xxxx
║❏➣ ${usedPrefix}🐓 628xxxx
╚════ 「 ${global.wm} 」 ════╝`
  let flaa = pickRandom(global.flaaaaa)
  await m.reply(bugmenu)
}
handler.help = ['bugmenu']
handler.tags = ['tools']
handler.command = /^(bugmenu)$/i
h

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.flaaaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=500&scaleHeight=300&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=500&scaleHeight=300&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=500&scaleHeight=300&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=500&scaleHeight=300&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=500&scaleHeight=300&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

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