let handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.menfess = conn.menfess ? conn.menfess : {}
    
    if (!text) throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Anonymous|Hai.`;
    let [jid, name, pesan] = text.split('|');
    
    if (user < 16) throw m.reply(`❎ Kamu masih dibawah umur, Kamu harus berusia setidaknya 16 tahun untuk menggunakan perintah ini`) 
    
    if ((!jid || !name || !pesan)) throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Anonymous|Hai.`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    
    if (!data.exists) throw 'Nomer tidak terdaftar di whatsapp.';
    
    if (jid == m.sender) throw 'tidak bisa mengirim pesan menfess ke diri sendiri.'
    let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    
    if (mf) return !0
    	let id = + new Date
        let tek = `Hai @${data.jid.split("@")[0]}, kamu menerima pesan Menfess nih.\n\nDari: *${name}*\n\nPesan: \n${pesan}\n\nMau balas pesan ini kak? bisa kok kak. tinggal ketik pesan kakak lalu kirim, nanti Mika sampaikan ke *${name}*.`.trim();
        
        await conn.reply(data.jid, tek, m)
        .then(() => {
            m.reply('Berhasil mengirim pesan menfess!\nApabila kamu mendapat balasan, balasannya akan dikirim kesini.')
            conn.menfess[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false
            }
            return !0
        })
}
handler.tags = ['anon']
handler.help = ['menfess'].map(v => v + ' <nomor|nama pengirim|pesan>')
handler.command = /^(menfess|menfes|confes)$/i
handler.private = true
handler.register = true

export default handler

/*
  * Saxia - Md
  * Made By Saxia Team
  * T.
*/