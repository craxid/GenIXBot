
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix }) => {

}
handler.help = ['smeme']
handler.tags = ['sticker']
handler.command = /^smeme$/i

export default handler