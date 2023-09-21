let handler = async (m, { conn }) => {
let name = await conn.getName(m.sender)
let thumb = 'https://telegra.ph/file/bd044275940ed1b62efcd.jpg'
let mikapp = 'https://telegra.ph/file/a9a78b769836fe10fa62d.jpg'

m.reply(`Sama-sama kak ${name}`)

}
handler.customPrefix = /^(makasih|terima kasih|thx|thanks|tengs|thank you|arigato|arigatou|arigathanks)$/i
handler.command = new RegExp

export default handler