
import pkg from 'node-webpmux'
import { format } from 'util'

let handler = async (m, { conn, text }) => {
	if (!m.quoted) throw 'Reply a sticker!'
	let stiker = false
	
	try {
	    const { Image } = pkg; 
		let [packname, ...author] = text.split('|')
		author = (author || []).join('|')
		let mime = m.quoted.mimetype || ''
		
		if (!/webp/.test(mime)) throw 'Reply sticker!'
		
		let img = await m.quoted.download()
		
		if (!img) throw 'Reply a sticker!'
		let img2 = new pkg()
		
		await img2.load(await m.quoted.download())
		stiker = await addExif(img, packname || '', author || '+62 831-5593-6234')
		
	} catch (e) {
		console.error(e)
		if (Buffer.isBuffer(e)) stiker = e
		
	} finally {
		if (stiker) conn.sendMessage(m.chat, { sticker: stiker }, { quoted: m })
		else throw 'Conversion failed'
	}
}

handler.help = ["smeta"]
handler.tags = ["sticker"]
handler.command = /^(smeta)$/i

export default handler

async function addExif(buffer, packname, author, categories = [''], extra = {}) {
	const img = new Image()
	const json = { 'sticker-pack-id': 'zykuan', 'sticker-pack-name': packname, 'sticker-pack-publisher': author, 'emojis': categories, 'is-avatar-sticker': 1, ...extra }
	let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
	let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
	let exif = Buffer.concat([exifAttr, jsonBuffer])
	exif.writeUIntLE(jsonBuffer.length, 14, 4)
	await img.load(buffer)
	img.exif = exif
	return await img.save(null)
}