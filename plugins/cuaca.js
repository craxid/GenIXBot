import axios from 'axios'

let handler = async (m, { args }) => {
  if (!args[0]) throw "Masukan nama tempat atau kota"
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
    let wea = `「 📍 」 Lokasi: ${name}\n「 🗺️ 」 Negara: ${Country}\n「 🌤️ 」 Cuaca: ${Weather}\n「 🌡️ 」 Temperatur: ${Temperature}\n「 💠 」 Temperatur Minimum: ${Minimum_Temperature}\n「 📛 」 Temperatur Maksimum: ${Maximum_Temperature}\n「 💦 」 Kelembaban: ${Humidity}\n「 🌬️ 」 Angin: ${Wind}
  `
    let bmkglogo = 'https://telegra.ph/file/5e539e4e1194c057c1fc7.jpg'
    
    await m.react(awan)
    m.reply(wea, '${global.bmkg})
  } catch (e) {
    return "Error: Lokasi tidak ditemukan!"
  }
}

handler.help = ['Cuaca']
handler.tags = ['tools']

handler.command = /^(weather|cuaca)$/i

export default handler
