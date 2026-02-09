const express = require("express");
const {
  addSalesController,
  getLeaderboardController,
} = require("../controllers/salesController");

const router = express.Router();

router.post("/", addSalesController);
router.get("/leaderboard", getLeaderboardController);

module.exports = router;
