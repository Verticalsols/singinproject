const express = require("express");
const authController = require("../controller/auth");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/signup", authMiddleware.checkValidData, authController.signup);
router.post("/signin", authMiddleware.checkSignInData, authController.signin);

module.exports = router;
