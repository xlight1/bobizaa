export default async function displayLoadingScreen(conn, from) {
    const loadingStages = [
      "ʟᴏᴀᴅɪɴɢ 《 █▒▒▒▒▒▒▒▒▒▒▒》10%,",
      "ʟᴏᴀᴅɪɴɢ 《 ████▒▒▒▒▒▒▒▒》30%,",
      "ʟᴏᴀᴅɪɴɢ 《 ███████▒▒▒▒▒》50%,",
      "ʟᴏᴀᴅɪɴɢ 《 ██████████▒▒》80%,",
      "ʟᴏᴀᴅɪɴɢ 《 ████████████》100%,",
      "instagram.com/ayoub_otakum"
    ];
  
    try {
      const { key } = await conn.sendMessage(from, { text: 'انتظر...' });
  
      for (let i = 0; i < loadingStages.length; i++) {
        await conn.relayMessage(from, {
          protocolMessage: {
            key: key,
            type: 14,
            editedMessage: {
              conversation: loadingStages[i]
            }
          }
        }, {});
      }
    } catch (error) {
      console.error('Error displaying loading screen:', error);
    }
  }
  
