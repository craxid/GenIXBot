
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
▢ *Link* : ${v.url}
▢ *Durasi* : ${v.timestamp}
▢ *Diunggah pada :* ${v.ago}
▢ *Ditonton:* ${v.views}

   `.trim()

      case 'channel': return `
▢ *${v.name}* (${v.url})
▢${v.subCountLabel} (${v.subCount}) Subscriber
▢ ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n________________________\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch'] 
handler.tags = ['dl']
handler.command = ['ytsearch', 'yts'] 

export default handler
