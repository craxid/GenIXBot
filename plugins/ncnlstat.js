
import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
let thumb = 'https://telegra.ph/file/016c521fb63069af28cec.jpg'
m.reply(wait)

//code area
/*try {
    let ncnlstat = await fetch(`https://api.mcstatus.io/v2/status/bedrock/play.emperials.net`)
    let statu = await ncnlstat.json()
    
    let motd = await statu.json()
    
    let tegs = `
    *NCNL Server*
    
    Name: ${motd.raw}
    Status: ${statu.online}
    Host: ${statu.host}
    Port: ${statu.port}
    `*/
    
  try {

    let sevre = await fetch('https://api.mcstatus.io/v2/status/bedrock/play.emperials.net')

    const data = await sevre.json()
    const motd = data.motd.raw
    const status = data.online
    const host = data.host
    const port = data.port
    
    let result = `*NCNL Server* 

    Nama: ${motd}
    Status: ${status}
    Host: ${host}
    Port: ${port}`

  } catch (error) {
    console.log('Terjadi kesalahan:', error)
  }
}
    
conn.sendMessage(m.chat, {
text: result,
contextInfo: {
externalAdReply: {
title: (`NCNL Stalker`),
body: ('Status Server'),
thumbnailUrl: thumb,
sourceUrl: ('minecraft://?addExternalServer=NCNL Legacy|NCNL_Legacy.aternos.me:40383'),
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false
}}})

	}
	catch {
		m.reply(`❎ Error: Ada sebuah kesalahan`)
	}
//end

}
handler.help = ['mcstalk']
handler.tags = ['tools']
handler.command = ['mcstalk']
handler.premium = false
handler.diamond = false

export default handler

/*let gpt = await fetch(`https://api.azz.biz.id/api/gpt?q=${text}&key=mangea`)*/