
export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, `🔴 Adiós Amigos  *${this.user.name}* Will leave the group \n\nYour rent is over`)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
