import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
m.reply(wait)
let type = (command).toLowerCase()
switch (type) {

case "couple":
case "ppcp":{
if (isBan) return newReply('Lu di ban kocak awokwok') 

//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return newReply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)

let anu = await fetch("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
let anuin = await anu.json()

}
limitAdd(m.sender, limit)
break
default;
  }
}
