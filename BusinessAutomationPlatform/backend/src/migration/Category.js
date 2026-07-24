const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Category = sequelize.define("Category",{

    category_id:{
        type:DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true
    },

    name:{
        type:DataTypes.STRING(100),
        allowNull:false
    }

},{
    tableName:"categories",
    timestamps:true,
    underscored:true
});

module.exports = Category;