//import db from '../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import { pinterest } from '@bochilteam/scraper'
//import { plugins } from '../lib/plugins.js'
let tags = {
  'main': 'MAIN MENU',
  'ai': 'AI MENU',
  'spam': 'SPAM MENU',
  'anon': 'ANONYMOUS MENU',
  'game': 'GAMES',
  'econ': 'LEVEL & EKONOMI',
  'rg': 'DAFTAR',
  'sticker': 'STICKER',
  'img': 'IMAGE',
  'maker': 'MAKER',
  'prem': 'PREMIUM',
  'group': 'GRUP',
  'nable': 'OPSI EN/DISABLE', 
  'nime': 'ANIME',
  'rnime': 'ANIME REACTION',
  'dl': 'DOWNLOADS',
  'tools': 'TOOLS',
  'fun': 'FUN',
  'cmd': 'DATABASE',
  'owner': 'OWNER', 
  'advanced': 'LANJUTAN',
}
const defaultMenu = {
  before: `
*${htki} Mika Misono Bot ${htka}*
 
👋🏻 %ucapan *%name*
🧿 Level Kamu : *%level* 
👥 Total User : %totalreg
📈 Runtime : %muptime
─────────────
Support Us!
🔰 https://teer.id/dede_klender
─────────────
%readmore
─────────────
*INFORMATION*
Ⓟ = Premium
ⓓ = Menggunakan Diamond 
-----  -----  -----  -----  -----
  `.trimStart(),
  header: `▣───「 *%category* 」───▣`,
  body: `│✇ %cmd %isdiamond %isPremium`,
  footer: `╰────࿐\n`,
  after: `\n*Mika Bot masih dalam tahap pengembangan.*
`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
      
    let gmbr = await thum.pinterest('Mika Misono')
      
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamond: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      ucapan: ucapan(),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, diamond, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    /*let arr = [
    { text: "*┌ [□□□□□□□□□□] ┐*\n*└──── 0%*", timeout: 1000 },
    { text: "*┌ [■□□□□□□□□□] ┐*\n*└──── 10%*", timeout: 1000 },
    { text: "*┌ [■■□□□□□□□□] ┐*\n*└──── 20%*", timeout: 1000 },
    { text: "*┌ [■■■□□□□□□□] ┐*\n*└──── 30%*", timeout: 1000 },
    { text: "*┌ [■■■■□□□□□□] ┐*\n*└──── 40%*", timeout: 1000 },
    { text: "*┌ [■■■■■□□□□□] ┐*\n*└──── 50%*", timeout: 1000 },
    { text: "*┌ [■■■■■■□□□□] ┐*\n*└──── 60%*", timeout: 1000 },
    { text: "*┌ [■■■■■■■□□□] ┐*\n*└──── 70%*", timeout: 1000 },
    { text: "*┌ [■■■■■■■■□□] ┐*\n*└──── 80%*", timeout: 1000 },
    { text: "*┌ [■■■■■■■■■□] ┐*\n*└──── 90%*", timeout: 1000 },
    { text: "*┌ [■■■■■■■■■■] ┐*\n*└──── 100%*", timeout: 1000 },
    { text: `*${wait}*\n\n👋 ${ucapan} *${name}*`, timeout: 1000 }
  ];

  let lll = await conn.sendMessage(m.chat, { text: wait }, { quoted: m });

  for (let i = 0; i < arr.length; i++) {
    await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: lll,
        type: 14,
        editedMessage: {
          conversation: arr[i].text
        }
      }
    }, { quoted: m });
  }*/
    
    //let pp = 'https://telegra.ph/file/a9a78b769836fe10fa62d.jpg'
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    
    let pps = await pp
    let username = conn.getName(who)
    
/*if (text) return conn.sendMessage(m.chat, {
text: (text.trim()),
contextInfo: {
externalAdReply: {
title: ('Mika Misono Bot'),
body: (`${username}`),
thumbnailUrl: pp,
sourceUrl: ('https://www.facebook.com/dede2015k'),
mediaType: 3,
showAdAttribution: true,
renderLargerThumbnail: false
}}}, m)*/

let fuk = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": ""
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  }
  

conn.sendMessage(m.chat, {text: (text.trim()),
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
"externalAdReply": {
    "title": ('Mika Misono Bot'),
    "body": (`${username}`),
    "mediaType": 1,
    "thumbnailUrl": gmbr.getRandom(),
    "renderLargerThumbnail": false
    }}}, 
    {quoted: m, fuk})

    //conn.sendFile(m.chat, pp, 'menu.jpg', text.trim(), m, null, rpl)
    
    /*conn.sendButton(m.chat, text.trim(), '▢ DyLux  ┃ ᴮᴼᵀ\n▢ Sígueme en Instagram\nhttps://www.instagram.com/fg98_ff', pp, [
      ['ꨄ︎ Apoyar', `${_p}donate`],
      ['⏍ Info', `${_p}botinfo`],
      ['⌬ Grupos', `${_p}gpdylux`]
    ],m, rpl)*/
    
  } catch (e) {
    conn.reply(m.chat, '❎  Maaf, menunya error', m)
    throw e
  }
}
handler.help = ['help']
handler.tags = ['main']
handler.command = ['menu', 'help', '?'] 
handler.register = false

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' jam ', m, ' menit ', s, ' detik'].map(v => v.toString().padStart(2, 0)).join('')
}

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat Dini Hari Kak"
  if (time >= 4) {
    res = "Selamat Pagi Kak"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak"
  }
  if (time >= 18) {
    res = "Selamat Malam Kak"
  }
  return res
}