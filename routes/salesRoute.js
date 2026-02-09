const express = require("express");
const { addSalesController } = require("../controllers/salesController");

const router = express.Router();

router.post("/",addSalesController)

module.exports = router