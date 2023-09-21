let handler = m => m

handler.all = async function (m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 2) {
            if (this.spam[m.sender].count > 1) {
                //global.db.data.users[m.sender].banned = true
                m.reply('Jangan spam, beri jeda 5 detik!')
            }
            this.spam[m.sender].count = 5
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}

export default handler