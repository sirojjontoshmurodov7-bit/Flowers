const express = require("express");
const router = express.Router();
const {
    getFlowers,
    getFlower,
    createFlower,
    editFlower,
    deleteFlower,
} = require("../controllers/flowersController");

router.get("/", getFlowers);
router.get("/:id", getFlower);
router.post("/", createFlower);
router.put("/:id", editFlower);
router.delete("/:id", deleteFlower);

module.exports = router;
