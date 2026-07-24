const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Warehouse = sequelize.define("Warehouse", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    address: {
        type: DataTypes.TEXT
    },
    phone: {
        type: DataTypes.STRING(30)
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: "warehouses",
    timestamps: true,
    underscored: true
});

module.exports = Warehouse;