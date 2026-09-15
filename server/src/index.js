require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
require("./models/Item");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
});

app.use("/api/items", itemRoutes);

async function start() {
    try {
        await sequelize.authenticate();
        // creates any missing tables based on the models above
        await sequelize.sync();
        console.log("Database connected and synced");

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("Unable to start server:", err);
        process.exit(1);
    }
}

start();
