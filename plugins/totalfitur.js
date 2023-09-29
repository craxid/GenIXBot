
import fs from 'fs'

let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
   let thumb = 'https://telegra.ph/file/f23a8239b80c0896b407c.jpg'
 await conn.sendFile(m.chat, thumb, 'fitur.jpg', `Total Fitur saat ini: ${totalf}`, m)
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
export default handler