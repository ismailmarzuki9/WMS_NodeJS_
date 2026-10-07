
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
}

export default AllController;