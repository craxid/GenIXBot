let isSatir = /(([Kk]enao|[Bb]ims|[Aa]v)a|tumlul|Tumlul|[Gg]wejh|[Oo]kgey|[Ss]iava|[Kk]avan|tenan|[Aa](msu|f[ah])|[Mm]gak|lmao|[Pp]edo|([Bb]an|hoo)h|[Kk]nf|ancrit)/i // tambahin sendiri

let handler = m => m

export async function (m, { conn, args, text, usedPrefix, command, isAdmin, isBotAdmin }) {
    let imgr = '../src/avatar_contact.png'
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    
    let isAntiSatir = isSatir.exec(m.text)

    if (chat.antiSatir && isAntiSatir) {
        conn.sendFile(m.chat, imgr, 'satir.jpg', `*Kata Penyatir Terdeteksi!*\n\n${global.dilarang}`, m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].warn += 1
    
    conn.sendMessage(m.chat, 'Kamu mendapatkan 1 Warning karna nyatir', m)
        } else if (!bot.restrict) return m.reply('Maaf, tidak bisa kick user!')
    }
    return !0
}

export default handler

/*
  * DannTeam
  * ig: @dannalwaysalone
*/