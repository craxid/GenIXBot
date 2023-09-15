
import axios from 'axios'
import FormData from 'form-data'

let handler = async (m, { conn, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (/image/.test(mime)) {
    let img = await q.download()
    let formData = new FormData()
    formData.append('image', img, 'image.jpg')
    try {
      let res = await axios.post('https://api.imgbb.com/1/upload', formData, {
        params: {
          key: '32dccc1da5b49fc9ed09fd6d9e691d40'
        },
        headers: formData.getHeaders()
      })
      let imageUrl = res.data.data.url
      
      let api = `https://api.yanzbotz.my.id/api/tools/enhance?url=${encodeURIComponent(imageUrl)}`
      
      //let api = `https://api.neoxr.my.id/api/remini?image=${encodeURIComponent(imageUrl)}&apikey=lucycat`

      m.react(rwait)

      let { data } = await axios.get(api)
      let resultURL = data.data.url

      let resultImage = await axios.get(resultURL, { responseType: 'arraybuffer' })
      let contentType = resultImage.headers['content-type']

      await conn.sendFile(m.chat, Buffer.from(resultImage.result.url, 'binary'), 'remini.jpg', wm, m, false, { mimetype: contentType })
    } catch (e) {
      console.log(e)
      m.reply('There is an error!')
    }
  } else {
    m.reply('Kirim/Balas gambar dengan caption .remini')
  }
}

handler.command = /^remini$/i
handler.tags = ['tools']
handler.help = ['remini','enchant','tohd']
handler.premium = false

export default handler