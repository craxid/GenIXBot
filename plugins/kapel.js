
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    
    m.react(rwait)

let type = (command).toLowerCase()

switch (type) {
    
case "couple": 
case "ppcouple":
case "ppcp":
case "kapel": {
if (isBan) return newReply('Lu di ban kocak awokwok') 

let anu = await fetch("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")

let random = anu[Math.floor(Math.random() * anu.length)]
conn.sendMessage(m.chat,{image: {url: random.male,},caption: `Couple Male`,},{quoted: m,})

conn.sendMessage(m.chat,{image: {url: random.female,},caption: `Couple Female`,},{quoted: m,})
}
break

default;
 }
}

handler.help = ['ppcouple']
handler.tags = ['nime']
handler.command = ['ppcouple','couple','kapel','ppcp']
handler.diamond = true

export default handler

/*function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}*/
