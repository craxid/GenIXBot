import cuaca from 'caliph-api'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {

if (!text) throw `✳️ Masukan nama daerah`

m.react(rwait)

try {
  let { status, data: resultInfo } = await cuaca.search.cuaca(text);
    
}
  if (status != 200) {
    catch {m.reply(`Daerah ${text} tidak ditemukan!`);
  }
await m.reply( parseRes ( resultInfo, { title: "Cuaca Hari Ini", })
  );
  
  m.react(cuaca)
}
handler.help = ['cuaca <daerah>']
handler.tags = ['tools']
handler.command = ['cuaca','weather'] 
handler.diamond = true
handler.premium = true

export default handler