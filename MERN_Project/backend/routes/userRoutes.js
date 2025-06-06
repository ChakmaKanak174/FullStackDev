const express = require("express");
const router = express.Router();
const { regUser, loginUser, getMe } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", regUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
