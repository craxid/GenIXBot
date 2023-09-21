
import fetch from 'node-fetch'
import { mediafiredl } from '@bochilteam/scraper'
import fg from 'api-dylux'
let free = 8 // limite de descarga
let prem = 15 //si su servidor tienes menos de 2GB baja el límite
let handler = async (m, { conn, args, text, usedPrefix, command, isOwner, isPrems }) => {
	
   if (!args[0]) throw `✳️ Masukkan tautan mediafire setelah perintah`
    if (!args[0].match(/mediafire/gi)) throw `❎ Link incorrect`
    m.react(rwait)
    
    let limit = isPrems || isOwner ? prem : free
	let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url: u }))).buffer()
    try {
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let isLimit = limit * 1024 < filesize
    let caption = `
   ≡ *MEDIAFIRE*
▢ *Nama:* ${filename}
▢ *Ukuran:* ${filesizeH}
▢ *Ekstensi:* ${ext}
▢ *Diunggah:* ${aploud}
${isLimit ? `\n▢ File melebihi ukuran batas untuk user gratis *+${free} MB*\nBeli Premium untuk mengunduh file lebih dari *${prem} MB*` : ''} 
`.trim()
    await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m)  
    if(!isLimit) await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
    
    } catch {

        try {
	let res = await fg.mediafireDl(args[0])
     let { url, url2, filename, ext, upload_date, filesize, filesizeB } = res
    let isLimit = limit * 1024 < filesizeB
    let caption = `
   ≡ *MEDIAFIRE*
▢ *Nama:* ${filename}
▢ *Ukuran:* ${filesize}
▢ *Ekstensi:* ${ext}
▢ *Diunggah:* ${upload_date}
${isLimit ? `\n▢ File melebihi ukuran batas untuk user gratis *+${free} MB*\nBeli premium untuk mengunduh file lebih dari *${prem} MB*` : ''} 
`.trim()

await conn.sendFile(m.chat, ss, 'ssweb.png', caption, m)
if(!isLimit) await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    m.react(done)
} catch {
    m.reply(`Error: gunakan link lain`)
}

  }
  
}
handler.help = ['mediafire <url>']
handler.tags = ['dl', 'prem']
handler.command = ['mediafire', 'mfire','mfdl'] 
handler.diamond = 3
handler.premium = true

export default handler
