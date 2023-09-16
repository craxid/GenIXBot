import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {

let type = (command).toLowerCase()
switch (type) {

case "couple":
case "ppcp":{
if (isBan) return newReply('Lu di ban kocak awokwok') 

if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)

let anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")

m.reply(wait)

let random = anu[Math.floor(Math.random() * anu.length)]
conn.sendMessage(m.chat,{image: {url: random.male,},caption: `Couple Male`,},{quoted: m,})

conn.sendMessage(m.chat,{image: {url: random.female,},caption: `Couple Female`,},{quoted: m,})
}
limitAdd(m.sender, limit)
break
}
  }
}
