const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("Home sahifadasiz");
});

router.get("/menu", function (req, res) {
  res.send("Menu sahifadasiz");
});

router.get("/cummunity", function (req, res) {
  res.send("Jamiyat sahifadasiz");
});

module.exports = router;