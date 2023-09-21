
import uploadImage from '../lib/uploadImage.js'
import ocrapi from 'ocr-space-api-wrapper'
import { MessageType } from '@adiwajshing/baileys'

let handler = async (m, { conn, text }) => {
    const q = m.quoted ? m.quoted : m
    const mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah .ocr`
    
    await m.reply(wait)
    
    if (!/image\/(jpe?g|png)/.test(mime)) throw `
    _*jenis ${mime} tidak didukung!*_
    `
    let img = await q.download()
    let url = await uploadImage(img)
    let hasil = await ocrapi.ocrSpace(url)
    
 await m.reply(hasil.ParsedResults[0].ParsedText)    
}

handler.help = ['ocr', 'totext']
handler.tags = ['tools']
handler.command = ['ocr','totext']
handler.diamond = true

export default handler