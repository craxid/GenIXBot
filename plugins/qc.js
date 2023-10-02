
/*import { sticker } from '../lib/sticker.js'
import axios from 'axios'

let handler = async (m, { conn, text }) => {
   if (!text) return m.reply('Teksnya Mana Sayang?')
   if (text.length > 30) return m.reply('Maksimal 30 Teks!')
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')

   const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#FFFFFF",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.name,
            "photo": {
               "url": pp
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
   let stiker = await sticker(buffer, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
}

handler.help = ['qc']
handler.tags = ['sticker']
handler.command = /^(qc|quoted|quotly)$/i

handler.limit = true

export default handler
*/

/*
Di Buat : Zyko MD
©Zyko MD 2023

 * ig: @zzyko_04
 * yt: @zykobotz
 * tt: @zzyko_04

Jangan di hapus creatornya kack
Saya capek ngetik kode 

"Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
(QS ash-Shaff: 2-3).
*/

import { sticker } from '../lib/sticker.js'
let axios from'axios'

let handler = async (m, { conn, args, text, usedPrefix, command, quoted }) => {
  if (!text) throw `
Contoh: ${usedPrefix + command} pink hallo

list warna

pink
biru
merah
hijau
kuning
ungu
birutua
birumuda
abu
orange
hitam
putih
teal
merahmuda
cokelat
salmon
magenta
tan
wheat
deeppink
api
birulangit
jingga
birulangitcerah
hot pink
birumudalangit
hijau laut
merahtua
oranyemerah
cyan
ungutua
hijaulumut
hijaugelap
birulaut
oranyetua
ungukehitaman
fuchsia
magenta gelap
abu-abutua
peachpuff
hijautua
merahgelap
goldenrod
abu-abutua
ungugelap
emas
perak
`
  if (text.length > 100) return conn.reply(m.chat, `🚩 Max 100 character.`, m)

  let [color, ...message] = text.split(' ');
  message = message.join(' ');
  let pushname = m.pushName || "No Name";
  let backgroundColor;

  switch(color) {
      case 'pink':
      backgroundColor = '#f68ac9';
      break;
       case 'biru':
      backgroundColor = '#6cace4';
      break;
      case 'merah':
      backgroundColor = '#f44336';
      break;
       case 'hijau':
      backgroundColor = '#4caf50';
      break;
       case 'kuning':
      backgroundColor = '#ffeb3b';
      break;
       case 'ungu':
      backgroundColor = '#9c27b0';
      break;
       case 'birutua':
      backgroundColor = '#0d47a1';
      break;
      case 'birumuda':
      backgroundColor = '#03a9f4'; 
      break;
       case 'abu':
      backgroundColor = '#9e9e9e';
      break;
       case 'orange':
      backgroundColor = '#ff9800';
      break;
       case 'hitam':
      backgroundColor = '#000000';
      break;
      case 'putih':
      backgroundColor = '#ffffff';
      break;
      case 'teal':
      backgroundColor = '#008080';
      break;      
      case 'merahmuda':
      backgroundColor = '#FFC0CB';
      break;            
      case 'cokelat':
      backgroundColor = '#A52A2A';
      case 'salmon':
      backgroundColor = '#FFA07A'; 
      break;     
      case 'magenta':
      backgroundColor = '#FF00FF'; 
      break;     
      case 'tan':
      backgroundColor = '#D2B48C'; 
       break;    
      case 'wheat':
      backgroundColor = '#F5DEB3'; 
       break;    
       case 'deeppink':
      backgroundColor = '#FF1493'; 
       break;   
       case 'api':
      backgroundColor = '#B22222';  
       break;  
       case 'birulangit':
      backgroundColor = '#00BFFF';  
       break; 
       case 'jingga':
      backgroundColor = '#FF7F50';  
       break;          
      case 'birulangitcerah':
      backgroundColor = '#1E90FF';   
       break; 
       case 'hotpink':
      backgroundColor = '#FF69B4';   
       break; 
       case 'birumudalangit':
      backgroundColor = '#87CEEB';   
       break; 
       case 'hijaulaut':
      backgroundColor = '#20B2AA';   
       break; 
       case 'merahtua':
      backgroundColor = '#8B0000';   
       break; 
       case 'oranyemerah':
      backgroundColor = '#FF4500';   
       break; 
       case 'cyan':
      backgroundColor = '#48D1CC';   
       break; 
       case 'ungutua':
      backgroundColor = '#BA55D3';   
       break; 
      case 'hijaulumut':
      backgroundColor = '#00FF7F';   
       break; 
       case 'hijaugelap':
      backgroundColor = '#008000';   
       break; 
       case 'birulaut':
      backgroundColor = '#191970';   
       break; 
       case 'oranyetua':
      backgroundColor = '#FF8C00';   
       break; 
       case 'ungukehitaman':
      backgroundColor = '#9400D3';   
       break; 
       case 'fuchsia':
      backgroundColor = '#FF00FF';   
       break; 
       case 'magentagelap':
      backgroundColor = '#8B008B';   
       break;                      
       case 'abu-abutua':
      backgroundColor = '#2F4F4F';   
       break;        
       case 'peachpuff':
      backgroundColor = '#FFDAB9';   
       break;        
       case 'hijautua':
       backgroundColor = '#BDB76B';   
       break;        
       case 'merahgelap':
      backgroundColor = '#DC143C';   
       break;        
       case 'goldenrod':
      backgroundColor = '#DAA520';   
       break;        
       case 'abu-abutua':
      backgroundColor = '#696969';   
       break;        
      case 'ungugelap':
      backgroundColor = '#483D8B';   
       break;        
       case 'emas':
      backgroundColor = '#FFD700';   
       break;        
       case 'perak':
      backgroundColor = '#C0C0C0';   
       break;
      default:
      throw 'Warna yang dipilih tidak tersedia.';
  }
conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
try {
  let obj = {
    type: 'quote',
    format: 'png',
    backgroundColor,
    width: 512,
    height: 768,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: pushname,
          photo: { 
            url: await conn.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/999b290ecb3e50107a9da.jpg'),
          }
        },
        text: message,
        replyMessage: {},
      },
    ],
  };  

  let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
    headers: {
      'Content-Type': 'application/json',
    },
  });  

  let buffer = Buffer.from(response.data.result.image, 'base64');
  let stickerFile = await sticker(buffer, false, global.packname, global.author);
conn.sendMessage(m.chat, {
		react: {
			text: '✅',
			key: m.key,
		}
	})
  if (stickerFile) return conn.sendFile(m.chat, stickerFile, 'sticker.webp', '', m, null)
  } catch (error) {
    console.log(error);
    throw '*Server Bermasalah Coba Lagi*';
  }
};

handler.help = ['qc'].map(v => v + ' <warna> <text> ')
handler.tags = ['sticker'];
handler.command = /^(qc)$/i;
handler.premium = false
handler.limit = true
module.exports = handler;