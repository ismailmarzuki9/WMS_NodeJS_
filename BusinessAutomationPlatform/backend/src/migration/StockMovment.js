const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const StockMovement = sequelize.define("stock_movements",{

    id:{
        type:DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true
    },

    product_id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        references:{
            model:"products",
            key:"Product_id"
        }
    },

    toko_id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        references:{
            model:"toko",
            key:"toko_id"
        }
    },

    customer_id:{
        type:DataTypes.BIGINT,
        allowNull:true,
        references:{
            model:"customers",
            key:"customer_id"
        }
    },

    reference_no:{
        type:DataTypes.STRING(50)
    },

    reference_type:{
        type:DataTypes.ENUM(
            "PURCHASE",
            "SALE",
            "TRANSFER",
            "ADJUSTMENT",
            "STOCK_OPNAME"
        )
    },

    movement_type:{
        type:DataTypes.ENUM(
            "IN",
            "OUT",
            "TRANSFER_IN",
            "TRANSFER_OUT",
            "ADJUSTMENT_PLUS",
            "ADJUSTMENT_MINUS"
        )
    },

    qty:{
        type:DataTypes.INTEGER,
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

    stock_before:{
        type:DataTypes.INTEGER
    },

    stock_after:{
        type:DataTypes.INTEGER
    },

    remark:{
        type:DataTypes.TEXT
    },

    created_by:{
        type:DataTypes.BIGINT,
        references:{
            model:"users",
            key:"userid"
        }
    }

},{
    timestamps:true,
    updatedAt:false
});

module.exports=StockMovement;