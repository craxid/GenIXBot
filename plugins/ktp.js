
import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh: 083137550315|Mika Misono|Jakarta, 02-07-2023|Perempuan|Kabupaten Jepang|02/02|Kelurahan Suka makmur|Kecamatan Suka Maju|Islam|Belum Kawin|Mahasiswa|Indonesia|Seumur Hidup|Provinsi Suka Mundur|Kabupaten Sukasuka'
  
  m.reply(wait)
  
  let res = `https://oni-chan.my.id/api/py-chan/ktpmaker?nik=${response[0]}&nama=${response[1]}&ttl=${response[2]}&jk=${response[3]}&gd=abc&almt=${response[4]}&rtw=${response[5]}&kel=${response[6]}&kc=${response[7]}&agm=${response[8]}&st=${response[9]}&krj=${response[10]}&ngr=${response[11]}&blk=${response[12]}&prv=${response[13]}&kab=${response[14]}&picturl=https://telegra.ph/file/13d20b5f39f5e4cf1aaf2.jpg&apikey=ui5F-4yJ3-Fo9s`
    conn.sendMessage(m.chat, res, 'ktp.jpg', `Nih kak\n${global.wm2}`, m, false)
}
handler.help = ['ktp'].map(v => v + ' <text>')
handler.tags = ['tools']
handler.command = /^(ktp)$/i
handler.diamond = 5

export default handler

//https://oni-chan.my.id/api/py-chan/ktpmaker?nik=&nama=&ttl=&jk=&gd=&almt=&rtw=&kel=&kc=&agm=&st=&krj=&ngr=&blk=&prv=&kab=&picturl=&apikey=ui5F-4yJ3-Fo9s