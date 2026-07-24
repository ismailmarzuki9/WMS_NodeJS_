const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Customer = sequelize.define("Customer",{

    id:{
        type:DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true
    },

    name:{
        type:DataTypes.STRING(150),
        allowNull:false
    },

    phone:{
        type:DataTypes.STRING(30)
    },

    address:{
        type:DataTypes.TEXT
    }

},{
    tableName:"customers",
    timestamps:true,
    underscored:true
});

module.exports = Customer;