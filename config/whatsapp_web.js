const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
  webVersionCache: { type: "none" },
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-gpu"],
  },
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
  console.log("qr code has generate. scan this");
});

client.on("ready", () => {
  console.log("whatsapp is ready");
});

client.on("message", (message) => {
  console.log(`Message from ${message.from}: ${message.body}`);
});

module.exports = client;
