// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/database");

import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

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

// module.exports = Toko;
export default Toko;