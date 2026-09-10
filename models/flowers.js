const mongoose = require("mongoose");

const flowerSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    description: String,
    quantity: Number,
    isActive: Boolean,
});

module.exports = mongoose.model("Flower", flowerSchema);
