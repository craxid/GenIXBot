
import axios from "axios"
import cheerio = require("cheerio");
import handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `Masukkan Domain!\n\n*Contoh:* dannteam.com`;
if (text.includes('https://') || text.includes('http://')) throw `Tolong masukkan tanpa domain *https/http!*. Contoh: api.dannnxd.repl.co`;
  try {
    const waiting = `Tunggu Sebentar...`;
    m.reply(waiting);
    const response = await axios.get(`https://whois.botcahx.live/whois/${text}`);
    const $ = cheerio.load(response.data);
    const data = $("pre").text();
    m.reply(data);
  } catch (error) {
    console.error(error);
    m.reply('Terjadi error saat mencari informasi WHOIS, silakan coba lagi nanti');
  }
};
handler.command = ['whois', 'whoislookup'];
handler.help = ['whois', 'whoislookup'];
handler.tags = ['tools'];
handler.premium = false;
module.exports = handler;