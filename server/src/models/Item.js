const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Item = sequelize.define(
    "Item",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        tableName: "items",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: false,
    },
);

module.exports = Item;
