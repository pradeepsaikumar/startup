const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get all users
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Approve user as Admin
router.put("/approve/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { role: "Admin", approved: true },
    { new: true }
  );
  res.json(user);
});

module.exports = router;
