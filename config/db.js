const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.4.4", "8.8.8.8"]);

async function connectDB() {
    try {
        await mongoose.connect(process.env.DATABASE_LINK);

        console.log("Database ulandi!");
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

module.exports = connectDB