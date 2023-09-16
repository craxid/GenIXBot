import fs from "fs" 
import axios from "axios"
import fetch from "node-fetch"
import { color } from '../lib/color'
import moment from "moment-timezone"
import { MessageType } from '@adiwajshing/baileys'

let handler  = async (m, { conn, command }) => {
     const time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
     
     let username = conn.getName(m.sender)
     
     let data = fs.readFileSync('../lib/kapelan.js')
     
     let  jsonData = JSON.parse(data);
     let randIndex = Math.floor(Math.random() * jsonData.length)
     
     let json = jsonData[randIndex]
     
     let randCowo= await getBuffer(json.cowo)
     
     conn.sendMessage(m.chat, { image: randCowo, caption: '*Cowo*', quoted: m })
     
	 // conn.sendMessage(m.chat, randCowo, MessageType.image,  { caption: '*Cowo*', quoted: m })
	 
	 let randCewe = await getBuffer(json.cewe)
	conn.sendMessage(m.chat, { image: randCewe, caption: '*Cewe*', quoted: m })
	
	 // conn.sendMessage(m.chat, randCewe, MessageType.image, { caption: '*Cewe*', quoted: m })
}
handler.help = ['ppcouple']
handler.tags = ['img']
handler.command = /^ppcouple|ppcp$/i
handler.owner = false
handler.diamond = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

export default handler

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}