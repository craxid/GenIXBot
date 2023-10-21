//import db from '../lib/database.js'
let reg = 50
let handler = async (m, { conn, args, usedPrefix, command }) => {
    let fa = `
Berapa banyak Kamu ingin taruhan?

📌 Contoh :
*${usedPrefix + command}* 100`.trim()
    if (!args[0]) throw fa
    if (isNaN(args[0])) throw fa
    let apuesta = parseInt(args[0])
    let users = global.db.data.users[m.sender]
    let time = users.lastslot + 10000
    if (new Date - users.lastslot < 10000) throw `⏳ Tunggu *${msToTime(time - new Date())}* agar bisa dimainkan lagi`
    if (apuesta < 100) throw '✳️ Minimal taruhan *100 XP*'
    if (user < 18) throw m.reply(`❎ Kamu masih dibawah umur, Kamu harus berusia setidaknya 18 tahun untuk menggunakan perintah ini`) 
    if (users.exp < apuesta) {
        throw `✳️ Kamu tidak memiliki cukup *XP*`
    }

    let emojis = ["🍍️", "🍋", "🍒"];
    let a = Math.floor(Math.random() * emojis.length);
    let b = Math.floor(Math.random() * emojis.length);
    let c = Math.floor(Math.random() * emojis.length);
    let x = [],
        y = [],
        z = [];
    for (let i = 0; i < 3; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }
    for (let i = 0; i < 3; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }
    for (let i = 0; i < 3; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }
    let end;
    if (a == b && b == c) {
        end = `*🎁 KAMU MENANG*\n\nKamu mendapatkan *+${apuesta + apuesta} XP*`
        users.exp += apuesta + apuesta
    } else if (a == b || a == c || b == c) {
        end = `*🔮 DIKIT LAGI!*\n\nKamu hanya dapat *+${reg} XP*`
        users.exp += reg
    } else {
        end = `*😔 KAMU KALAH*  \n\n*XP* mu dikurangi *-${apuesta}*`
        users.exp -= apuesta
    }
    users.lastslot = new Date * 1
    return await m.reply(
        `
       🎰 ┃ *FUNTASY SLOT 69* 
     ───────────
       ${x[0]} : ${y[0]} : ${z[0]}
       ${x[1]} : ${y[1]} : ${z[1]}
       ${x[2]} : ${y[2]} : ${z[2]}
     ───────────
       🎰 ┃ 🎰 ┃ 🎰
        
${end}`) 
}
handler.help = ['slot <jumlah taruhan>']
handler.tags = ['game']
handler.command = ['slot']
handler.register = false
handler.group = true

export default handler

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return seconds + " Detik"
}
