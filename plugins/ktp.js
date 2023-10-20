
import fetch from 'node-fetch'

let handler = async (m, { conn, args, text }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw `Masukkan Text\nContoh: ${usedPrefix + command} NIK|Nama|Tempat/Tanggal Lahir|L/P|Gol. Darah|Alamat|rtrw|Kelurahan/Desa|Kecamatan|Agama|Status|Pekerjaan|WNI/WNA?|Masa Berlaku|Provinsi|Kabupaten`
  
  if (!text.includes('|')) throw  `✳️ Pisahkan dengan *|* \n\n📌 Contoh : \n*${usedPrefix + command}* NIK|Nama|Tempat/Tanggal Lahir|L/P|Gol. Darah|Alamat|rtrw|Kelurahan/Desa|Kecamatan|Agama|Status|Pekerjaan|WNI/WNA?|Masa Berlaku|Provinsi|Kabupaten`
  
  m.reply(wait)
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')

  let res = `https://oni-chan.my.id/api/py-chan/ktpmaker?nik=${response[0]}&nama=${response[1]}&ttl=${response[2]}&jk=${response[3]}&gd=${response[4]}&almt=${response[5]}&rtw=${response[6]}&kel=${response[7]}&kc=${response[8]}&agm=${response[9]}&st=${response[10]}&krj=${response[11]}&ngr=${response[12]}&blk=${response[13]}&prv=${response[14]}&kab=${response[15]}&picturl=${pp}&apikey=ui5F-4yJ3-Fo9s`
  
await conn.sendFile(m.chat, res, 'ktp.jpg', `Nih kak\n© Mika Bot`, m, false)
}
handler.help = ['ktp'].map(v => v + ' <text>')
handler.tags = ['tools']
handler.command = /^(ktp)$/i
handler.diamond = 5

export default handler

//https://oni-chan.my.id/api/py-chan/ktpmaker?nik=&nama=&ttl=&jk=&gd=&almt=&rtw=&kel=&kc=&agm=&st=&krj=&ngr=&blk=&prv=&kab=&picturl=&apikey=ui5F-4yJ3-Fo9s

//https://oni-chan.my.id/api/py-chan/ktpmaker?nik=&nama=&ttl=&jk=&gd=&almt=&rtw=&kel=&kc=&agm=&st=&krj=&ngr=&blk=&prv=&kab=&picturl=&apikey=Your-apikey