import ModelSupplier from "../migration/Supplier.js";

class suppliersController {
    static async getAll (req, res) {
        try {
            const findAllSuppliers = await ModelSupplier.findAll(
               {
                limit : 100,
                order :[
                    ['company_name','DESC']
                ]
               }
            );
            res.status(200).json({
                status: "success",
                code: 200,
                data: findAllSuppliers
            });
        } catch (err) {
            res.status(500).json({
                status: "error",
                code: 500,
                message: "Gagal mengambil data supplier"
            });
        }
    }
}

export default suppliersController;