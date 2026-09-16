import API from '../config/Api/Api.js';

class supplierServices {
    static api = new API()
    static async getAll(){
        const respons = await this.api.get('/api/suppliers');
        console.log(respons);
        return respons.data;
    }
}

export default supplierServices;
