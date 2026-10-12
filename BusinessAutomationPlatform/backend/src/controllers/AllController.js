
class AllController {

     static getAll(model, include){
        // console.log("relasi yang di bawa",include);
        return async (req, res) =>
        {
                try {
                    const GetData = await model.findAll(
                        {
                            limit : 10,
                            order :[
                                     ['createdAt','DESC']
                            ],
                            include :[
                                    include
                            ]
                        }
                        
                    );
                    res.status(200).json({
                        status : "succes",
                        code : 200,
                        data : GetData
                    });
                } catch (err) {
                    res. status(500).json({
                        status :"Error !",
                        code : 500,
                        message : "Data gagal"
                    });            
                }
        }
    }

    static Post(model){
        console.log("ini data MOdel", model);
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
}

export default AllController;