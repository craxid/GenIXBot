
/*let handler = async (m, { conn }) => {
let name = await conn.getName(m.sender)
let thumb = 'https://telegra.ph/file/bd044275940ed1b62efcd.jpg'
let mikapp = 'https://telegra.ph/file/a9a78b769836fe10fa62d.jpg'

let mika = `Halo kak ${name} 👋\nAda yang bisa ${global.packname} bantu?\n\nKetik !help untuk membuka Menu`

let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let username = conn.getName(who)
    
if (mika) return conn.sendMessage(m.chat, {
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
handler.customPrefix = /^(bot|bot?|bott|mika|oy|bang|banh|p)$/i
handler.command = new RegExp

export default handler
*/

let handler = async (m, { conn }) => {

let thumbn = 'https://telegra.ph/file/ff4ecbd141633dc02c619.jpg'

async function reSize(buffer, ukur1, ukur2) {
			return new Promise(async (resolve, reject) => {
				let jimp = require('jimp')
				var baper = await jimp.read(buffer);
				var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
				resolve(ab)
			})
		}

const flo = {
key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": `apa sih`,"h": `Hmm`, 'jpegThumbnail': await reSize(thumbn, 100, 100)}}
}
let a = ["apa si","iya","oy","ha?","siap","gw?","males bgt sumpah","siapa?","gw kah?","hemm","oke","sip","apa cuk","apa om?"]
let pick = pickRandom(a)
conn.sendMessage(m.chat, {text: pick}, {quoted: flo})

}
handler.customPrefix = /^(bot|bot?|bott|mika|oy|bang|banh|p)$/i
handler.command = new RegExp()


export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}