const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define("Product",{

    id:{
        type:DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true
    },

    sku:{
        type:DataTypes.STRING(100),
        unique:true
    },

    barcode:{
        type:DataTypes.STRING(100),
        unique:true
    },

    name:{
        type:DataTypes.STRING(150),
        allowNull:false
    },

    category_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: "categories",
            key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
    },

    unit_id:{
        type:DataTypes.BIGINT,
        allowNull:false
    },

    purchase_price:{
        type:DataTypes.DECIMAL(18,2),
        defaultValue:0
    },

    selling_price:{
        type:DataTypes.DECIMAL(18,2),
        defaultValue:0
    },

    minimum_stock:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },

    status:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }

},{
    tableName:"products",
    timestamps:true,
    underscored:true
});

module.exports = Product;