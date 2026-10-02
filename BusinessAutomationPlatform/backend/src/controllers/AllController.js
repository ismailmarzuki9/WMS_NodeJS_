
class AllController {

     static getAll(model){
        console.log(model);
        return async (req, res) =>
        {
                try {
                    const GetData = await model.findAll(
                        {
                            limit : 50,
                            order :[
                                     ['createdAt','DESC']
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