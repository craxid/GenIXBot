
import fg from 'api-dylux'  
let handler = async (m, { conn, args, usedPrefix, command }) => {

	if (!args[0]) throw `✳️ Masukan link Google Drive`
	m.react(rwait) 
	try {
	let res = await fg.GDriveDl(args[0])
	 await m.reply(`
≡ *Akebi-chan GDrive DL*
▢ *Nama File:* ${res.fileName}
▢ *Ukuran File:* ${res.fileSize}
▢ *Jenis:* ${res.mimetype}`)
		
	conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: "application/vnd.android.package-archive" }, { quoted: m })
	m.react(done)
   } catch {
	m.reply('Error: ganti linknya dengan yang lain') 
  }
}
handler.help = ['gdrive']
handler.tags = ['dl', 'prem']
handler.command = ['gdrive','gd','gddl']
handler.diamond = 2
handler.premium = false

export default handler
