import igeh from 'api-dylux'
import { instagramdl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ Penggunaan\n *${usedPrefix + command}* https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=`
    m.react(rwait) 
    
   try {
    let result = await instagramdl(args[0]);
    
    let tex = `
┌─⊷ *Akebi-chan IGDL*
▢ *Title:* ${result.title}
▢ *Quality:* ${result.quality}
▢ *Extention:* ${result.extention}
▢ *Size:* ${result.formattedSize}
▢ *URL:* ${result.url}
└───────────`;

    conn.sendFile(m.chat, { video: { url: result.url } }, 'ig.mp4', tex, m);
    
    m.react(done);
  } catch (error) {
 	m.reply('Error: Coba lagi dengan tautan lain')
 	} 
     
  }
handler.help = ['instagram <link ig>']
handler.tags = ['dl']
handler.command = ['ig', 'igdl', 'instagram', 'igimg', 'igvid'] 
handler.diamond = true

export default handler 

//https://api.itsrose.life/downloader/ig?url=${url}&apikey=Rk-fd4853c2a4e2d058b8d9f5ac