
import fs from 'fs'

let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
   let thumb = 'https://telegra.ph/file/f23a8239b80c0896b407c.jpg'
 //await conn.sendFile(m.chat, thumb, 'fitur.jpg', `Total Fitur saat ini: ${totalf}`, m)
 
const iyhkh = {
text: (`Total Fitur: ${totalf}`),
contextInfo: {
externalAdReply: {
title: ('Mika Misono Bot'),
body: (`Total Fitur: ${totalf}`),
thumbnailUrl: global.ppmika,
sourceUrl: ('https://www.facebook.com/dede2015k'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}}

await conn.sendMessage(m.chat, `Total fitur saat ini: ${totalf}`, m)

}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur','total','fitur']
export default handler