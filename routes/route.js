const express = require("express");
const sendMessage = require("../controller/WaController");

const router = express.Router();

router.post("/sendMessage", sendMessage);

module.exports = router;
