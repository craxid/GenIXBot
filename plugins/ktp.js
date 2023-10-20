
import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh: !ktp NIK|Nama|Tempat/Tanggal Lahir|L/P|Gol. Darah|Alamat|rtrw|Kelurahan/Desa|Kecamatan|Agama|Status|Pekerjaan|WNI/WNA?|Masa Berlaku|Provinsi|Kabupaten'
  if (!text.includes('|')) throw  `✳️ Pisahkan dengan *|* \n\n📌 Contoh : \n*${usedPrefix + command}* NIK|Nama|Tempat/Tanggal Lahir|L/P|Gol. Darah|Alamat|rtrw|Kelurahan/Desa|Kecamatan|Agama|Status|Pekerjaan|WNI/WNA?|Masa Berlaku|Provinsi|Kabupaten`
  m.reply(wait)
  
  let [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] = text.split`|`
  let res = await fetch(`https://oni-chan.my.id/api/py-chan/ktpmaker?nik=${encodeURIComponent(0)}&nama=${encodeURIComponent(1)}&ttl=${encodeURIComponent(2)}&jk=${encodeURIComponent(3)}&gd=${encodeURIComponent(4)}&almt=${encodeURIComponent(5)}&rtw=${encodeURIComponent(6)}&kel=${encodeURIComponent(7)}&kc=${encodeURIComponent(8)}&agm=${encodeURIComponent(9)}&st=${encodeURIComponent(10)}&krj=${encodeURIComponent(11)}&ngr=${encodeURIComponent(12)}&blk=${encodeURIComponent(13)}&prv=${encodeURIComponent(14)}&kab=${encodeURIComponent(15)}&picturl=https://telegra.ph/file/13d20b5f39f5e4cf1aaf2.jpg&apikey=ui5F-4yJ3-Fo9s`)
  
    conn.sendFile(m.chat, res, 'ktp.jpg', `Nih kak\n© Mika Bot`, m)
}
handler.help = ['ktp'].map(v => v + ' <text>')
handler.tags = ['tools']
handler.command = /^(ktp)$/i
handler.diamond = 5

export default handler

//https://oni-chan.my.id/api/py-chan/ktpmaker?nik=&nama=&ttl=&jk=&gd=&almt=&rtw=&kel=&kc=&agm=&st=&krj=&ngr=&blk=&prv=&kab=&picturl=&apikey=ui5F-4yJ3-Fo9s

//https://oni-chan.my.id/api/py-chan/ktpmaker?nik=&nama=&ttl=&jk=&gd=&almt=&rtw=&kel=&kc=&agm=&st=&krj=&ngr=&blk=&prv=&kab=&picturl=&apikey=Your-apikey