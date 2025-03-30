const express = require("express");
const { getBuyers, addBuyer } = require("../controllers/buyerController");
const router = express.Router();

router.get("/", getBuyers);
router.post("/", addBuyer);

module.exports = router;

