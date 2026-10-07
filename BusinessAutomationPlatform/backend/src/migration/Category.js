// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/database");

import { DataTypes } from "sequelize";
import db from '../config/database.js';

const Category = db.define(
    "category",
    {
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