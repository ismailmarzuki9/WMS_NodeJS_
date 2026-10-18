import { where } from "sequelize";

class AllController {

    // Yang perlu kamu pahami:
    // - relation adalah nama parameter buatanmu sendiri.
    // - include adalah opsi resmi Sequelize untuk mengambil data dari model yang berelasi.
    // Jadi, jika relation berisi model Toko, kamu harus meneruskannya ke properti include.

     static getAll(model, include){
        // console.log("relasinya", include);
        return async (req, res) =>
        {
                try {

                    const option = {
                            limit : 10,
                            order :[
                                     ['createdAt','DESC']
                            ],
                        }

                    if (include){
                            option.include = [include];
                    }
                    
                    const GetData = await model.findAll(option);

                    res.status(200).json({
                        status : "succes",
                        code : 200,
                        data : GetData
                    });
                } catch (err) {
                    res. status(500).json({
                        status :"Error !",
                        code : 500,
                        message : err.message
                    });            
                }
        }
    }

    static Post(model){
        // console.log("ini data post MOdel", model);
        return async (req,res)=>{
            console.log(req.body);
            try {
                const PostData = await model.create(
                    {
                        name : req.body.name,
                        symbol : req.body.symbol
                    }
                )

                res.status(200).json({
                    status : "succes",
                    code :200,
                    data : PostData
                })
            } catch (err) {
                res. status(500).json({
                        status :"Error !",
                        code : 500,
                        message : err.message,
                        // message : err.name,
                        // message : err.stack
                    });  
            }
        }
    }
// EDIT 
    static getID(model){
        return async (req, res)=>{
            try {
                const { id } = req.params; // untuk medapatkan id dari url request roting express
                const getID = await model.findByPk(id)
                res.status(200).json({
                    status : "succes",
                    code : 200,
                    data : getID
                })
            } catch (error) {
                console.log("getID",message.err)
            }  
        }
    }

    static editData(model, idField){
        return async (req, res) =>{
            try {
            const {id} = req.params;
            console.log("ini data yang akan di edit ", req.body);
            const editData = await model.update(
                {
                    name : req.body.name,
                    symbol : req.body.symbol
                },
                {
                    where : {
                        // toko_id : id
                        [idField] : id
                    }
                }
            )
            res.status(200).json({
                status : "succes",
                code : 200,
                data : editData
            })
     
            } catch (err) {
                console.log("", message.err);
            }
        }
    
    }

    static delete (model, idField) {
        return async (req, res) => {
            try {
            const {id} = req.params;
            const deleted  = await model.destroy({
                where : {
                    [idField] : id,
                },              
            })
            console.log(deleted);
            
            if (deleted === 0) {
                return res.status(404).json({
                    status: "error",
                    message: "Data tidak ditemukan",
                });
            }
             res.status(200).json({
                status : "succes",
                code : 200,
                data : deleted 
            });

            } catch (err) {
                console.error("Delete error:", err);
                return res.status(500).json({
                    status: "error",
                    message: "Gagal menghapus data",
                });
            }
        }
    }
}

export default AllController;