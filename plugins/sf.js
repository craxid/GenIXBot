
import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {

    if (!text) throw `where is the path?\n\nexample:\n${usedPrefix + command} plugins/menu.js`
    if (!m.quoted.text) throw `reply code`
    let path = `${text}`
    await fs.writeFileSync(path, m.quoted.text)

    m.reply(`Saved ${path} to file!`)
}

handler.help = ['savefile', 'sf'].map(v => v + ' <path>')
handler.tags = ['owner']
handler.command = ['savefile', 'sf']
handler.owner = true
export default handler

