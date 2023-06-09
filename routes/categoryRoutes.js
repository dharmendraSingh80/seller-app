const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");

router.post("/store-info", storeController.addStoreInfo);

module.exports = router;
