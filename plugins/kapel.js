
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    
case "couple": case"ppcp":{
if (isBan) return newReply('Lu di ban kocak awokwok') 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
newReply(mess.wait)
let random = anu[Math.floor(Math.random() * anu.length)]
juna.sendMessage(m.chat,{image: {url: random.male,},caption: `Couple Male`,},{quoted: m,})
juna.sendMessage(m.chat,{image: {url: random.female,},caption: `Couple Female`,},{quoted: m,})
}
limitAdd(m.sender, limit)
break

}

handler.help = ['ppcouple','coup','couple','husbu','neko','nekos','marin-kitagawa']
handler.tags = ['nime']
handler.command = ['randomanime','waifu','couple','husbu','neko','nekos','marin-kitagawa']
handler.diamond = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
