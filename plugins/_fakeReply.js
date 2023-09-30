
import fetch from 'node-fetch'
export async function before(m,{conn }) {
	
	let who = m.sender ? m.sender : conn.user.jid && conn.user.jid ? conn.user.jid : '0@s.whatsapp.net'
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://i.imgur.com/whjlJSf.jpg')
	
	//reply link wa
   global.rpl = { contextInfo: { externalAdReply: { mediaUrl: dygp, mediaType: 'VIDEO', description: 'support group', title: packname, body: 'support group', thumbnailUrl: pp, sourceUrl: dygp }}} 
	
	//reply link PayPal
    global.rpyp = { contextInfo: { externalAdReply: { mediaUrl: fgpyp, mediaType: 'VIDEO', description: 'Donate', title: 'PayPal', body: 'membantu menjaga bot tetap aktif', thumbnailUrl: pp, sourceUrl: fgpyp }}}
    
    //reply Instagram 
    global.rpig = { contextInfo: { externalAdReply: { mediaUrl: fgig, mediaType: 'VIDEO', description: 'Follow Instagram saya', title: 'dede_klender', body: 'Follow Instagram Saya', thumbnailUrl: pp, sourceUrl: fgig }}} 
	
	//reply link yt
    global.rpyt = { 
        contextInfo: { 
            externalAdReply: { 
                showAdAttribution: true, 
                mediaUrl: fgyt, 
                mediaType: 'VIDEO', 
                description: 'Suscribe : ' + fgyt, 
                title: 'ClanDare', 
                body: 'untuk mengapresiasi owner bot', 
                thumbnailUrl: pp, 
                sourceUrl: fgyt }}}
    
    /*reply fek
global.fekcrot = { 
text: mika,
contextInfo: { 
    externalAdReply: { 
        title: (`${username}`),
        body: ('Aku Online Kak!'),
        mediaUrl: dygp, 
        description: 'Donate', 
        title: 'PayPal', 
        body: 'membantu menjaga bot tetap aktif',
        thumbnailUrl: ppmika, 
        sourceUrl: dygp, 
        showAdAttribution: true 
    }}}*/
    

}
