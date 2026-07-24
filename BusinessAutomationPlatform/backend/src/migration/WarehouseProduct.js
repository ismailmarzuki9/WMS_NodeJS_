const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WarehouseProduct = sequelize.define("WarehouseProduct",{

    id:{
        type:DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true
    },

    warehouse_id:{
        type:DataTypes.BIGINT,
        allowNull:false
    },

    product_id:{
        type:DataTypes.BIGINT,
        allowNull:false
    },

    quantity:{
        type:DataTypes.INTEGER,
        defaultValue:0
    }

},{
    tableName:"warehouse_products",
    timestamps:true,
    underscored:true
});

module.exports = WarehouseProduct;