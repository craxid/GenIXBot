import axios from 'axios'

let handler = async (m, { args }) => {
  if (!args[0]) throw "Please provide place or location name"
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
    let wea = `「 📍 」 Kota: ${name}\n「 🗺️ 」 Negara: ${Country}\n「 🌤️ 」 Cuaca: ${Weather}\n「 🌡️ 」Temperatue: ${Temperature}\n「 💠 」 Minimum Temperatur: ${Minimum_Temperature}\n「 📛 」 Maximum Temperatur: ${Maximum_Temperature}\n「 💦 」 Humidity: ${Humidity}\n「 🌬️ 」 Wind: ${Wind}
  `

    m.react(awan)
    m.reply(wea)
  } catch (e) {
    return "Error location not found!!!"
  }
}

handler.help = ['weather']
handler.tags = ['tools']

handler.command = /^(weather|cuaca)$/i

export default handler
