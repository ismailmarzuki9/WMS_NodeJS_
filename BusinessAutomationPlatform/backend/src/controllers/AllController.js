
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
        console.log("ini apa", model);
        try{
            return async (req, res)=>{
                const { id } = req.params; // untuk medapatkan id dari url request roting express
                console.log(res);
                const getID = await model.findByPk(id)
                console.log("ini hasi ctrl get", getID);
            }
        }catch (err){
            console.log("getID",message.err)
        }
    }
    static editData(model){
        try {
            return async (req, res) =>{
                const editData = await model.update(
    
                )
            }

        } catch (err) {
            console.log("", message.err);
        }
    }
}

export default AllController;