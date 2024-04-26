const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

const pelangganHandler = require("./handler/pelanggan");

router.post("/register", pelangganHandler.register);
router.post("/login", pelangganHandler.login);
router.post("/logout", verifyToken, pelangganHandler.logout);
router.put("/update/:id", verifyToken, pelangganHandler.update);
router.get("/all", verifyToken, pelangganHandler.getAllPelanggan);
router.get("/:id", verifyToken, pelangganHandler.getPelanggan);

module.exports = router;
