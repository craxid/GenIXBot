import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
/*m.reply(`
*≡ SCRIPT*

▢ Git : ${_package.homepage}
`.trim())*/

let sc = (`
Mau script bot? Silahkan pesan ke owner\n\nKetik .owner
`)

conn.sendMessage(m.chat, {
text: sc,
contextInfo: {
externalAdReply: {
title: global.namebot,
body: ('Script Bot Mika Dijual kak!'),
thumbnailUrl: global.ppmika,
sourceUrl: ('https://wa.me/6285892734104'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}})
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'script'] 

export default handler
