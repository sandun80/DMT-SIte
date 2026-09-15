const Item = require("../models/Item");

async function getItems(req, res) {
    try {
        const items = await Item.findAll({ order: [["id", "DESC"]] });
        res.json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch items" });
    }
}

async function createItem(req, res) {
    const { name, description } = req.body;
    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }
    try {
        const item = await Item.create({
            name,
            description: description || null,
        });
        res.status(201).json(item);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to create item" });
    }
}

module.exports = { getItems, createItem };
