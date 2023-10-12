import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
/*m.reply(`
*≡ SCRIPT*

▢ Git : ${_package.homepage}
`.trim())*/

let sc = (`
Script bot ini dijual\nSilahkan pesan ke owner\n\nKetik .owner
`)

conn.sendMessage(m.chat, {
text: sc,
contextInfo: {
externalAdReply: {
title: global.namebot,
body: ('Rp 15.000,-'),
thumbnailUrl: global.ppmika,
sourceUrl: ('https://wa.me/6285892734104?text=Hai, saya mau beli script bot'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}}, {quoted: m})
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'script'] 

export default handler
