const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");
const storeRoutes = require("./storeRoutes");
const categoryRoutes = require("./categoryRoutes");
const subcategoryRoutes = require("./subcategoryRoutes");
const inventoryRoutes = require("./inventoryRoutes");

// Routes
router.use("/auth", authRoutes);
router.use("/store", storeRoutes);
router.use("/category", categoryRoutes);
router.use("/subcategory", subcategoryRoutes);
router.use("/inventory", inventoryRoutes);
