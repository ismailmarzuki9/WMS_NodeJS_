const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Toko = sequelize.define("Toko",{

    toko_id:{
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
    tableName:"toko",
    timestamps:true,
    underscored:true
});

module.exports = Toko;