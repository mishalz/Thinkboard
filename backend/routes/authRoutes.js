const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/authController");

const router = express.Router();

//Auth Routes
router.post("/register", registerUser); // register user
router.post("/login", loginUser); // login user
router.get("/profile", protect, getUserProfile); // Get User profile
router.put("/profile", protect, updateUserProfile); // update profile

module.exports = router;
