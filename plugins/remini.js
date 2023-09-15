/*
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
handler.help = ['remini']
handler.premium = false

export default handler
*/

const { TelegraPh } = require('../lib/telegraph')
const { fetchJson } = require("../lib/function")    
 
module.exports = {
	order: ['enhance','hd','remini'],
	exec: async (msg, client, from, {
		q,
		args,
		order,
		prefix
	}) => {
	try{
     if(!msg.fromMe) return 		
	 if (!msg.isQuotedImage) return msg.reply('Reply image')
	 msg.reply('_Tunggu sebentar, sedang proses..._')
     let media = await client.downloadAndSaveMediaMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
     let tph = await TelegraPh(media)
     let enhanced = await fetchJson("https://api.yanzbotz.my.id/api/tools/enhance?url=" + tph )
     try{
        client.sendMessage(from, { document : { url : enhanced.result.url }, fileName : 'Result.jpg', mimetype: 'image/jpeg' }, { quoted : msg})
     } catch {
       msg.reply("Sending image error!\ntrying to send in document form..... ")
       client.sendMessage(from, { document: enhanced.url, fileName: ranJ, mimetype: 'image/jpeg', caption: 'Result' }, { quoted: msg });
     }
    } catch (e) {
      msg.reply("!Type error:\n" + e)
    }
	}
}