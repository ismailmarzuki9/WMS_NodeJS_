const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Supplier = sequelize.define("Supplier", {

    id:{
        type:DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true
    },

    company_name:{
        type:DataTypes.STRING(150),
        allowNull:false
    },

    owner_name:{
        type:DataTypes.STRING(150)
    },

    phone:{
        type:DataTypes.STRING(30)
    },

    email:{
        type:DataTypes.STRING(100)
    },

    address:{
        type:DataTypes.TEXT
    }

},{
    tableName:"suppliers",
    timestamps:true,
    underscored:true
});

module.exports = Supplier;