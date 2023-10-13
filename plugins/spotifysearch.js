
import fetch from 'node-fetch'
let handler = async (m, {conn, text }) => {


if (!text) throw '✳️ Masukan kueri Spotify'

let ling = await fetch(`https://api.yanzbotz.my.id/api/cari/spotify?query=${text}`)

let hasil = await ling.json()
let tes = hasil.all
let teks = hasil.all.map(v => {
    switch (v.type) {
    case 'video': return `
▢ ${v.result.data.title}
▢ *Link* : ${v.result.data.url}
▢ *Durasi* : ${v.result.data.duration}
▢ *Popularitas:* ${v.resilt.data.popularity}
   `.trim()

/*case 'channel': return `
▢ *${v.name}* (${v.url})
▢${v.subCountLabel} (${v.subCount}) Subscriber
▢ ${v.videoCount} video
`.trim()*/
    }
  }).filter(v => v).join('\n\n________________________\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['spotifysearch'] 
handler.tags = ['dl']
handler.command = ['spotifysearch', 'sps'] 

export default handler
