const express = require("express");
const router = express.Router();
const memberController = require('./controllers/memberController')

/************************
 *    REST API   *
 ************************/

// memberga daxldor routerlar
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);



// boshqa routerlar
router.get("/menu", function (req, res) {
  res.send("Menu sahifadasiz");
});

router.get("/cummunity", function (req, res) {
  res.send("Jamiyat sahifadasiz");
});

module.exports = router;