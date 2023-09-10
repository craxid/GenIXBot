import uploadImage from '../lib/uploadImage'
import ocrapi from 'ocr-space-api-wrapper'
import { MessageType } from '@adiwajshing/baileys'

let handler = async (m, { conn, text }) => {
    const q = m.quoted ? m.quoted : m
    const mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah .ocr`
    
    await ('Tunggu bentar...')
    
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*jenis ${mime} tidak didukung!*_`
    const img = await q.download()
    const url = await uploadImage(img)
    const hasil = await ocrapi.ocrSpace(url)
    
 await m.reply(hasil.ParsedResults[0].ParsedText)    
}

handler.help = ['ocr', 'totext']
handler.tags = ['tools']
handler.command = /^(ocr|totext)$/i
handler.diamond = true

export default handler