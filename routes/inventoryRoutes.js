const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryController");

router.post("/inventory", inventoryController.addInventory);
router.get("/inventory/:sellerId", inventoryController.getInventoryBySeller);

module.exports = router;
