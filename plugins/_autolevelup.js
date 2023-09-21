
import { color } from '../lib/color'
import moment = require("moment-timezone"
let levelling = require('../lib/levelling.js'
module.exports = {
	before(m) {
		let user = global.db.data.users[m.sender]
		if (!user.autolevelup) return !0
		let before = user.level * 1
		while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

		if (before !== user.level) {
			let chating = `*Congratulations*, you have leveled up!
*[ ${before} ]* ➠ *[ ${user.level} ]*
Use *.profile* to check`.trim()
			let thumb = 'https://telegra.ph/file/bd044275940ed1b62efcd.jpg'

conn.sendMessage(m.chat, {
text: chating,
contextInfo: {
externalAdReply: {
title: namebot,
body: wm,
thumbnailUrl: thumb,
sourceUrl: sig,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
			console.log(color(chating, 'yellow'))
		}
	}
}