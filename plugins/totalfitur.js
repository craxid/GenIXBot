
import fs from 'fs'

let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
   let thumb = 'https://telegra.ph/file/f23a8239b80c0896b407c.jpg'
 //await conn.sendFile(m.chat, thumb, 'fitur.jpg', `Total Fitur saat ini: ${totalf}`, m)


conn.sendMessage(m.chat, {
text: (`Total Fitur: ${totalf}`),
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: ('Mika Misono Bot'),
body: (`Total Fitur: ${totalf}`),
thumbnailUrl: global.ppmika,
sourceUrl: ('https://www.facebook.com/dede2015k'),
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted: m})

//await conn.sendMessage(m.chat, iyhkh, m, null)

}

handler.help = ['totalfitur']
handler.tags = ['main']
handler.command = ['totalfitur','total','fitur']
export default handler