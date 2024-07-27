const client = require("../config/whatsapp_web");

async function sendMessage(req, res) {
  const { number, message } = req.body;

  try {
    const chatId = number.substring(1) + "@c.us";
    await client.sendMessage(chatId, message);
    return res.json({ msg: "success send message", chatId, message });
  } catch (error) {
    console.log(error);
  }
}

module.exports = sendMessage;
