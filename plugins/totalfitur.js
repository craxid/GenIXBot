
import fs from 'fs'

let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
   let thumb = `${global.ppmika}`
 await conn.sendFile(m.chat, thumb, 'fitur.jpg', `Total Fitur saat ini: ${totalf}`, m)
}

handler.help = ['totalfitur']
handler.tags = ['main']
handler.command = ['totalfitur']
export default handler