const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Unit = sequelize.define("Unit",{

    id:{
        type:DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true
    },

    name:{
        type:DataTypes.STRING(50),
        allowNull:false
    },

    symbol:{
        type:DataTypes.STRING(20)
    }

},{
    tableName:"units",
    timestamps:true,
    underscored:true
});

module.exports = Unit;