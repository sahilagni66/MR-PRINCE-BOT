let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`﹙⚙️﹚ Group : *${groupMetadata.subject}*\n🧀︪︩𐇲ׄ Members : *${participants.length}*${text ? `\n🧀︪︩𐇲ׄ Message : ${text}\n` : ''}\n┌───⊷ *MENTIONS*\n` + users.map(v => '▌⃞ׄ𒁷   ︪︩  @' + v.replace(/@.+/, '')).join`\n` + '\n🕯️̸̶ׅͯ﹞𝝦ɤ᥆ო͠ɩʂɛʂׅɒɤɛɬɧɛ︩︪ׅʂᥕɛɛɬɛ︪︩ʂɬ࣪ᥣɩɛ͠ʂ░🐈‍⬛̸̶ࣩ̣︩︪࣪', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = false
handler.group = true

export default handler
