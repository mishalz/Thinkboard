const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// @desc Register a new user
// @route POST /api/auth/register
// @access Public
const registerUser = async (req, res) => {};

// @desc Login user
// @route POST /api/auth/login
// @access Public
const loginUser = async (req, res) => {};

// @desc Get user profile
// @route POST /api/auth/profile
// @access Private (Requires JWT)
const getUserProfile = async (req, res) => {};

// @desc Update user profile
// @route PUT /api/auth/profile
// @access Private (Requires JWT)
const updateUserProfile = async (req, res) => {};

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile };
