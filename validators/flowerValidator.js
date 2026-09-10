const { z } = require("zod");

const flowerValidator = z.object({
    name: z.string().min(3),
    price: z.number().positive(),
    category: z.string().min(3),
    description: z.string().min(3),
    quantity: z.number().positive(),
    isActive: z.boolean(),
});

module.exports = flowerValidator;
