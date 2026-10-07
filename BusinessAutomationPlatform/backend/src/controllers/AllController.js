
class AllController {

     static getAll(model, include){
        console.log("relasi yang di bawa",include);
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

    static Post(model, include){
        console.log("ini data Post", model)
        return async (req,res)=>{
            try {
                const PostData = await model.create(
                    {
                        name : "aaa",
                        symbol : "TK-3SSMMM"
                    }
                )
                const respon = PostData.save();
                res.status(200).json({
                    status : "succes",
                    code :200,
                    data : PostData
                })
            } catch (err) {
                
            }
        }
    }
}

export default AllController;