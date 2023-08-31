
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    
    if (asahotak.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
        let fetch = await fetchUrl(global.api("zenz", "/entertainment/asahotak", {}, "apikey"))
        let result = await fetch.result
        killua.sendText(m.from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\n\nWaktu : 60s detik`, m).then(() => {
            asahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
            console.log("Jawaban: " + result.jawaban)
        })
        await sleep(60000)
        if (asahotak.hasOwnProperty(m.sender.split('@')[0])) {
            killua.sendText(m.from, `Waktu Habis\n\nJawaban:  ${asahotak[m.sender.split('@')[0]]}`, m)
            delete asahotak[m.sender.split('@')[0]]
        }
    
handler.help = ['asahotak']
handler.tags = ['fun']
handler.command = ['asahotak'] 

export default handler

    
}

/*masih males*/