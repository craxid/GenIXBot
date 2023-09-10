
import nodemailer from 'nodemailer'
import { v4: uuidv4 } from 'uuid'

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dede.klender@gmail.com', // Email kamu
    pass: 'sembilan99' // Password Email
  }
})

let handler = async (m, { conn, text, command, usedPrefix }) => {
  let user = global.db.data.users[m.sender]
  let email = user.email || ''
  let code = user.code || ''
  
  switch (command) {
    case 'regist':
      if (!text) return conn.reply(m.chat, `Usage: ${usedPrefix}regist <email>`, m)
      if (email) return conn.reply(m.chat, 'You have already registered an email', m)
      let id = uuidv4().replace(/-/g, '')
      let mailOptions = {
        from: '', // disini email
        to: text,
        subject: 'Verification Code',
        text: `Your verification code is ${id}`
      }
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error)
        } else {
          console.log('Email sent: ' + info.response)
        }
      })
      global.db.data.users[m.sender].email = text
      global.db.data.users[m.sender].code = id
      conn.reply(m.chat, `Verification code has been sent to ${text}. Please verify using ${usedPrefix}vercode <code>`, m)
      break
      
    case 'vercode':
      if (!text) return conn.reply(m.chat, `Usage: ${usedPrefix}vercode <code>`, m)
      if (!email) return conn.reply(m.chat, 'You have not registered an email', m)
      if (code === text) {
        global.db.data.users[m.sender].verified = true
        conn.reply(m.chat, 'Verification successful', m)
      } else {
        conn.reply(m.chat, 'Verification code is incorrect', m)
      }
      break
  }
}
handler.help = ['regist <email>', 'vercode <code>']
handler.tags = ['tools']
handler.command = /^(regist|vercode)$/i
handler.owner = false

module.exports = handler