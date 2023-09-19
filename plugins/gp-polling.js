let handler = async (m, { conn, text }) => {
  let args = text.split('\n').map(arg => arg.trim())
  let name = args[0]
  let values = args.slice(1)

  if (!name) {
    return m.reply('Tutorial: .polling nama\n value\n\nContoh: .polling *JUDUL*\nList1\nList2')
  }

  if (values.length < 2) {
    return m.reply('Harap berikan setidaknya dua nilai untuk jajak pendapat')
  }

  let poll = {
    name: name,
    values: values,
    selectableCount: false
  }

  conn.sendMessage(m.chat, {
    poll: poll
  })

  //m.reply(`Poll *${name}* telah dibuat, dengan opsi: *${values.join(', ')}*`)
}

handler.command = /^(poll|polling)$/i
handler.help = ['poll name\nvalue', 'polling name\nvalue1']
handler.tags = ['tools']
handler.register = false
handler.diamond = false

export default handler