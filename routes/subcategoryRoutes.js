const express = require("express");
const router = express.Router();
const subcategoryController = require("../controllers/subcategoryController");

router.post("/subcategory", subcategoryController.addSubcategory);

module.exports = router;
