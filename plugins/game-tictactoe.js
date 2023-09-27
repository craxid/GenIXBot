import TicTacToe from '../lib/tictactoe.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    conn.game = conn.game ? conn.game : {}
    if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `✳️ Kamu masih berada dalam game, untuk merestart sesi ketik : *${usedPrefix}delttt*`
    if (!text) throw `✳️ Nama room`
    let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    // m.reply('[WIP Feature]')
    if (room) {
        m.reply('✅ Menemukan lawan')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'STARTING'
        let arr = room.game.render().map(v => {
            return {
                X: '❎',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v]
        })
        let str = `
Menunggu @${room.game.currentTurn.split('@')[0]} Sebagai pemain pertama
        
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

▢ *ID ROOM* ${room.id}

▢ *Aturan* 
‣ Buat 3 baris simbol vertikal, horizontal atau diagonal untuk menang 
‣ Ketik *menyerah* untuk keluar dari permainan dan dinyatakan kalah.
`.trim()
        if (room.x !== room.o) await conn.reply(room.x, str, m, {
            mentions: conn.parseMention(str)
        })
        await conn.reply(room.o, str, m, {
            mentions: conn.parseMention(str)
        })
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        }
        if (text) room.name = text
        
     conn.reply(m.chat, `⏳ *Menunggu lawan*\nMasukkan perintah berikut untuk menerima
▢ *${usedPrefix + command} ${text}*

🎁 Hadiah: *4999 XP*`, m, {
            mentions: conn.parseMention(text)
        })
        
   conn.game[room.id] = room
    }
    
}

handler.help = ['tictactoe <nama room>']
handler.tags = ['game']
handler.group = true
handler.command = ['tictactoe', 'ttc', 'ttt', 'xo']

export default handler
