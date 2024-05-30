let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`﹙🍚̸̶͠﹚Group : *${groupMetadata.subject}*\n𓌔⃝⃞̸̶🍊 Members : *${participants.length}*${text ? `\n▢ Message : ${text}\n` : ''}\n┌───⊷ *MENTIONS*\n` + users.map(v => '︩︪❠ֽׄ   🫐⃝̸̶͟ @' + v.replace(/@.+/, '')).join`\n` + '\n⏠͟𓌔ׅ࣪⊂𝗗ᨭ͠ი𝗍ׅ𝗍𝗿υ𝘀︪︩𝗍࣪ᧉ᥎ᧉ𝗿ᨮ𝗍ɦ͠𝗂ᥰᧇׅᨮ︪︩𐐫υ࣪𝘀͠ᧉᧉ.ׅ𝝣᥎︪︩ᧉᥰ࣪𝘀͠ɑᥣ𝗍ׅᥣ𐐫ᨭ︪︩𝗄𝘀࣪ᥣ𝗂𝗄͠ᧉ̸ׅ𝘀υ︪︩ᧇɑ𝗿࣪ׅ𝆭𝆺𝅥ര࣪﹙🌲̸̶﹚', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = false
handler.group = true

export default handler
