let handler = async (m, { conn, text }) => {
  let args = text.split('\n').map(arg => arg.trim())
  let name = args[0]
  let values = args.slice(1)

  if (!name) {
    return m.reply('Tutorial: .polling2 nama\n value\n\nContoh: .polling2 *JUDUL*\nList1\nList2')
  }

  if (values.length < 2) {
    return m.reply('Harap berikan setidaknya dua nilai untuk jajak pendapat')
  }

  let poll = {
    name: name,
    values: values,
    selectableCount: true
  }

  conn.sendMessage(m.chat, {
    poll: poll
  })

  //m.reply(`Poll *${name}* telah dibuat, dengan opsi: *${values.join(', ')}*`)
}

handler.command = /^(poll2|polling2)$/i
handler.help = ['poll2 name\nvalue', 'polling2 name\nvalue1']
handler.tags = ['tools']
handler.register = false
handler.diamond = false

export default handler