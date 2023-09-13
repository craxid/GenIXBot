import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
/*m.reply(`
*≡ SCRIPT*

▢ Git : ${_package.homepage}
`.trim())*/

let sc = (`
Script Mika Bot dijual, silahkan pesan ke owner\n\n.Owner
`)

conn.sendMessage(m.chat, {
text: sc,
contextInfo: {
externalAdReply: {
title: (global.namebot),
body: ('S'),
thumbnailUrl: mikapp,
sourceUrl: ('https://www.facebook.com/dede2015k'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}})
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'script'] 

export default handler
