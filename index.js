const express = require("express");
const router = require("./routes/route");
const client = require("./config/whatsapp_web");

const app = express();

client.initialize();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("app running on port 3000");
});
