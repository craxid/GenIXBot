
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    
if (args.length < 1) return m.reply(`Kirim perintah *${prefix}nuliskiri* teks`)
    m.reply(wait)

var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')

spawn('convert', ['./media/image/nulis/images/buku/sebelumkiri.jpg','-font','./image/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','22','-interline-spacing','2','-annotate','+140+153',fixHeight,'./media/image/nulis/images/buku/setelahkiri.jpg'])
                .on('error', () => m.reply(mess.error))
                .on('exit', () => {
                
conn.sendMessage(m.chat, { image: fs.readFileSync('./media/image/nulis/images/buku/setelahkiri.jpg')})
                })
             }
    /*
     if (!teks) throw `📝 Mau nulis apa? Contoh : *${usedPrefix + command}* Aku cinta anime`
      m.react(rwait)
      let img = global.API('fgmods', '/api/maker/txt', { text: teks }, 'apikey')
      conn.sendFile(m.chat, img, 'img.png', `✅ Itu lebih baik dari apa yang Anda tulis ✍🏻`, m)*/
      m.react(done)

  }
  handler.help = ['txt']
  handler.tags = ['fun']
  handler.command = ['txt','nulis']
  handler.premium = true
  
  export default handler
  
