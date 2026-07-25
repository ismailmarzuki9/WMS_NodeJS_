const sequelize = require("../config/database");
require("../migration/Product");

(async () => {

    try{

        await sequelize.authenticate();

        console.log("Database Connected");

        await sequelize.sync();

        console.log("Table Created");

    }catch(err){

        console.log(err);

    }

})();