import Modelcustomer from "../migration/Customer.js";

class customercontroller
 {
    static async getAll (req, res) {
        try {
            const findAllSuppliers = await Modelcustomer.findAll(
               {
                limit : 50,
                order :[
                    ['createdAt','DESC']
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

export default customercontroller;