
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `✳️ Masukan nomor yang ingin diundang ke grup\n\n📌 Contoh :\n*${usedPrefix + command}* 6281234567890`
if (text.includes('+')) throw  `✳️ Masukan nomor tanpa tanda *+*`
if (isNaN(text)) throw ' 📌 Nomor tidak boleh menggunakan spasi'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `≡ *UNDANGAN GRUP*\n\nSeseorang mengundangmu masuk grup \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`✅ Undangan berhasil dikirim ke target`) 

}
handler.help = ['invite <62812xxx>']
handler.tags = ['group']
handler.command = ['invite','undang'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
