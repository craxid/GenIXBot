import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command }) => {
	let type = (args[1] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    if (!args[0]) return m.reply('Apikeynya mana?')
  
  let cek = 'Mencari Apikey...'
try {
    if (/cekapi(key)?|cekkey/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
            
case 'zenzapi': 
    let zenz = await (await fetch(`https://api.zahwazein.xyz/user/cekapi?apikey=${args[0]}`)).json()
    m.reply(cek)
    if (zenz.message == 'success') {
    conn.reply(m.chat, `• *Type:* Zenz API
• *Apikey:* ${args[0]}

• *Name:* ${zenz.result.username}
• *Total Hit:* ${zenz.result.total_hits}
• *Hit Today:* ${zenz.result.today_hits}
• *Account:* ${zenz.result.premium_expired}

• *Expired:* ${zenz.result.premium_expired}`, m)
} else m.reply('Invalid Apikey !')
            break


          default:
            //return conn.sendButton(m.chat, `*${htki} CEK APIKEY ${htka}*`, 'Select Button Here', null, [['XTeam', `.cekapi ${args[0]} xteam`],['Lolhuman', `.cekapi ${args[0]} lolhuman`]],m)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          //return conn.sendButton( m.chat, wm, wm, null, [`⋮☰ Menu`, `.menu`], m)

      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}
handler.help = ['cekapikey']
handler.tags = ['tools']
handler.command = /^(cek(key|api))$/i

export default handler

//https://api.zahwazein.xyz/user/cekapi?apikey=zenzkey_f59c1aacf2