const da = [
  'https://tinyurl.com/gdd01',
  'https://tinyurl.com/gdd02',
  'https://tinyurl.com/gdd003',
  'https://tinyurl.com/gdd004',
  'https://tinyurl.com/gdd05',
  'https://tinyurl.com/gdd006'
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, pickRandom(da), 'dadu.webp', '', m)
}
handler.help = ['dadu']
handler.tags = ['game']
handler.command = ['dadu', 'dice'] 
handler.

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
