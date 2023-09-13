
import didyoumean from 'didyoumean'
import similarity from 'similarity'

let handler = m => m

handler.before = function (m, { match, usedPrefix, text, args }) {
	if ((usedPrefix = (match[0] || '')[0])) {
		let noPrefix = m.text.replace(usedPrefix, '')
		let args = noPrefix.trim().split` `.slice(1)
		let text = args.join` `
		let alias = Object.values(global.plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
		if (alias.includes(noPrefix)) return
		let mean = didyoumean(noPrefix, alias)
		let sim = similarity(noPrefix, mean)
		let som = sim * 100
		let dann = `Apakah kamu mencari *${usedPrefix + mean}*?\n\n➲ Hasil Kemiripan *${parseInt(som)}%*`
	 if (mean) this.sendMessage(m.chat, {
text: dann,
contextInfo: {
externalAdReply: {
title: (global.namebot),
body: ('SEPERTINYA KAMU SALAH MENGEJA?'),
thumbnailUrl: 'https://telegra.ph/file/bd044275940ed1b62efcd.jpg',
sourceUrl: ('https://www.facebook.com/dede2015k'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}})
	}
  }

export default handler

/*
  * DannTeam
  * ig: @jkt48.danzz
*/