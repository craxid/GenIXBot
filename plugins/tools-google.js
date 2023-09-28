
/*import { googleIt } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args }) => {
    const fetch = (await import('node-fetch')).default
    let full = /f$/i.test(command)
    let text = args.join` `
    if (!text) return conn.reply(m.chat, '✳️ Apa yang ingin kamu cari di Google?', m)
    let url = 'https://google.com/search?q=' + encodeURIComponent(text)
    let search = await googleIt(text)
    let msg = search.articles.map(({
        // header,
        title,
        url,
        description
    }) => {
        return `*${title}*\n_${url}_\n_${description}_`
    }).join('\n\n')
    try {
        let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
        if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
        await conn.sendFile(m.chat, ss, 'screenshot.png', url + '\n' + msg, m)
    } catch (e) {
        m.reply(msg)
    }
}
handler.help = ['google']
handler.tags = ['tools']
handler.command = ['google','ggsearch'] 
handler.diamond = true

export default handler
*/

let fetch = require('node-fetch')
let googleIt = require('google-it')
let handler = async (m, { conn, command, args }) => {
  let full = /f$/i.test(command)
  let text = args.join` `
  if (!text) return conn.reply(m.chat, 'Tidak ada teks untuk di cari', m)
  let url = 'https://google.com/search?q=' + encodeURIComponent(text)
  let search = await googleIt({ query: text })
  let msg = search.map(({ title, link, snippet}) => {
    return `*${title}*\n_${link}_\n_${snippet}_`
  }).join`\n\n`
  try {
    let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
    if (ss.includes('html')) throw ''
    await conn.sendFile(m.chat, ss, 'screenshot.png', url + '\n\n' + msg, m)
  } catch (e) {
    m.reply(msg)
  }
}
handler.help = ['google'].map(v => v + ' <search>')
handler.tags = ['internet']
handler.command = /^google?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.diamond = true

export default handler