
import { ChatBot, conversation_style } from 'bingai-js'
export default async function handler(m, {
    text: prompt
}) {
    if (!prompt) return m.reply("Usage:\n!bing < prompt >\n\nExample:\n!bing What is Javascript")
    
    try {
        m.reply(msg.wait)
        const cookie = bingCookie
        const a = new ChatBot(cookie);
        await a.init();
        /**
         *   balanced : conversation_style.balanced
         *   creative : conversation_style.creative
         *   precise  : conversation_style.precise
         */
         
m.reply(await a.ask(prompt, conversation_style.creative))
    } 
catch (e) {
    m.reply(msg.err)
    
    conn.reply(set.owner[0] + '@s.whatsapp.net', 'Fitur: Bing Ai\n\n' + String(e), null)
    }
}
handler.command = ["bing", "bingai"]
handler.help = ["bing / bingai < prompt >"]
handler.tags = ["ai", "prem"]
handler.diamond = true

export default handler