import axios from 'axios'

let handler = async (m, { args }) => {
  if (!args[0]) throw "Masukan nama tempat atau kota"
  
  await m.react(awan)
  
  try {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
    )
    let res = await response
    let name = res.data.name
    let Country = res.data.sys.country
    let Weather = res.data.weather[0].description
    let Temperature = res.data.main.temp + "°C"
    let Minimum_Temperature = res.data.main.temp_min + "°C"
    let Maximum_Temperature = res.data.main.temp_max + "°C"
    let Humidity = res.data.main.humidity + "%"
    let Wind = res.data.wind.speed + "km/h"
    let wea = `「 📍 」 Lokasi: ${name}\n「 🗺️ 」 Negara: ${Country}\n「 🌤️ 」 Cuaca: ${Weather}\n「 🌡️ 」 Temperatur: ${Temperature}\n「 💠 」 Temperatur Min.: ${Minimum_Temperature}\n「 📛 」 Temperatur Maks.: ${Maximum_Temperature}\n「 💦 」 Kelembaban: ${Humidity}\n「 🌬️ 」 Angin: ${Wind}
  `
    let bmkglogo = 'https://api.zahwazein.xyz/creator/ttp'
    
    
conn.sendMessage(m.chat, {text: wea,
contextInfo: {
forwardingScore: 
isForwarded: true,
externalAdReply: {
title: ('Laporan Cuaca'),
body: (name),
thumbnailUrl: global.bmkg,
sourceUrl: ('https://www.facebook.com/dede2015k'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}}, {quoted: m})
    
  } catch (e) {
    return "Error: Lokasi tidak ditemukan!"
  }
}

handler.help = ['cuaca <nama kota>']
handler.tags = ['tools']

handler.command = /^(weather|cuaca)$/i

export default handler
