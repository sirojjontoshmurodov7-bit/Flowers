const Flower = require("../models/flowers");
const flowerValidator = require("../validators/flowerValidator");

exports.getFlowers = async (req, res) => {
    try {
        const flowers = await Flower.find();
        res.status(200).json(flowers);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

exports.getFlower = async (req, res) => {
    try {
        const flower = await Flower.findById(req.params.id);

        if (!flower) {
            return res.status(404).json({
                message: "Bunday flower yo'q",
            });
        }
        res.status(200).json(flower);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

exports.createFlower = async (req, res) => {
    try {
        const validation = flowerValidator.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({
                message: validation.error.issues.map((issue) => issue.message),
            });
        }

        const flower = await Flower.create(validation.data);

        res.status(201).json(flower);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

exports.editFlower = async (req, res) => {
    try {
        const validation = flowerValidator.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({
                message: validation.error.issues.map((issue) => issue.message),
            });
        }
        const flower = await Flower.findByIdAndUpdate(
            req.params.id,
            validation.data,
            { new: true },
        );

        if (!flower) {
            return res.status(404).json({
                message: "Flower topilmadi",
            });
        }

        res.status(200).json(flower);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

exports.deleteFlower = async (req, res) => {
    try {
        const flower = await Flower.findByIdAndDelete(req.params.id);

        if (!flower) {
            return res.status(404).json({
                message: "Gul yo'q ekan",
            });
        }

        res.status(200).json({
            message: "Gul o'chirildi",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
