//https://vihangayt.me/download/apk?id=

import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
  
	
if (!text) throw `✳️ Download aplikasi menggunakan ID\n\nContoh: !chord iwan fals manusia setengah dewa`
m.reply(wait)
    
try {
let ling = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
let apkdl = await ling.json()
