const express = require("express");
const router = express.Router();
const { regUser, loginUser, getMe } = require("../controllers/userController");

router.post("/", regUser);
router.post("/login", loginUser);
router.get("/me", getMe);

module.exports = router;
