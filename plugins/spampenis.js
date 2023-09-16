let handler = async (m, { conn }) => {
let name = await conn.getName(m.sender)

=> "kontol\n".repeat(100)

handler.help = ['spampenis <jimlah>']
handler.diamond = 3
handler
