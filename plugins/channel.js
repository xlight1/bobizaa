let handler = async (m, { conn }) => {

m.reply(`*مجتمع على الواتساب:*\n
*https://chat.whatsapp.com/BK3RzIe9Kd79kGmxtCC1r3*
*تابعني هناك♥*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(channel)$/i

export default handler;
