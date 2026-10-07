import Toko from "./Toko.js";
import StockMovement from "./StockMovment.js";
//1 Relasi StockMovement dan Toko =============================
StockMovement.belongsTo(Toko, { // satu id_stockMovement hanya memiliki satu id_toko
    foreignKey: 'toko_id',
    targetKey: 'toko_id'
});
Toko.hasMany(StockMovement, { // satu id_toko dapat memilki banyak id stockMovement
    foreignKey: 'toko_id',
    sourceKey: 'toko_id'
});

//2.    ===========================