import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
m.reply()
let type = (command).toLowerCase()
switch (type) {

case "couple":
case "ppcp":{
if (isBan) return newReply('Lu di ban kocak awokwok') 

//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)

let anu = await fetch("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
let anuin = await anu.json()

let random = anuin[Math.floor(Math.random() * anuin.length)]

conn.sendMessage(m.chat,{image: {anuin.url: random.male,},caption: `Couple Male`,},{quoted: m,})

conn.sendMessage(m.chat,{image: {anuin.url: random.female,},caption: `Couple Female`,},{quoted: m,})
}
limitAdd(m.sender, limit)
break
default;
  }
}

handler.help = ['ppcouple']
handler.tags = ['img']
handler.command = ['ppcouple','ppcp']
handler.premium = false
handler.diamond = true