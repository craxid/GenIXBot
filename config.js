import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285892734104', 'Dede Kurniawan', true],
  [''], 
  [''] 
] //Numeros de owner 

global.mods = ['6285892734104'] 
global.prems = ['', '', '']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  waifu: 'https://waifu.pics',
  ssweb: 'https://image.thum.io',
  zenz: 'https://api.zahwazein.xyz',
  anna: 'https://api.anna.biz.id',
  lann: 'https://api.betabotz.org',
  azz: 'https://api.azz.biz.id/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.zahwazein.xyz': 'zenzkey_f59c1aacf2',
  'https://api.anna.biz.id': 'anna',
  'https://api-fgmods.ddns.net': 'L7bOQXGA',
  'https://api.betabotz.org': 'tE9z2ZQb',
  'https://api.azz.biz.id': 'mangea'
  //Regístrese en https://api-fgmods.ddns.net/
}

// Sticker WM
global.packname = 'Mika Bot' 
global.author = '+62 831-5593-6234' 
global.fgig = '▢ Follow Instagram\nhttps://www.instagram.com/dede_klender\n' 
global.dygp = 'https://chat.whatsapp.com/BDYIsBhoR2I2aXpEvZRzWP'
global.fgsc = 'https://github.com/craxid/Akebi-chan-MD' 
global.fgyt = 'https://youtube.com/ClanDare'
global.ppmika ='https://telegra.ph/file/bd044275940ed1b62efcd.jpg'
global.fgpyp = 'https://paypal.me/dedeklender'
global.fglog = 'https://genix.eu.org/akebi_bot.jpg'
global.qris = 'https://telegra.ph/file/77e1d9fa9c14042bcfcb4.png'

global.wait = '*⌛ _Tunggu bentar.._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.animoji = '🌸'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 
global.sange = '🥵'
global.awan = '🌦️'

// Tampilan
global.htki =  '▣───「' // Hiasan kiri
global.htka = '」───▣' // Hiasan kanan
global.htjava = '❃' // Hiasan
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
