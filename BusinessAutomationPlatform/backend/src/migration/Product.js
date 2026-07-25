const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define("products", {

    Product_id:{
        type:DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true
    },

    category_id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        references:{
            model:"categories",
            key:"category_id"
        }
    },

    supplier_id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        references:{
            model:"suppliers",
            key:"supplier_id"
        }
    },

    sku:{
        type:DataTypes.STRING(50),
        unique:true
    },

    barcode:{
        type:DataTypes.STRING(100),
        unique:true
    },

    name:{
        type:DataTypes.STRING(200),
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
    timestamps:true
});

module.exports=Product;