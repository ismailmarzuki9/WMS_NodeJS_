// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/database");

import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

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

export default Category;