import API from '../config/Api/Api.js';

class supplierServices {
    api = new API()

    async getAll(){
        const respons = await this.api.get('/api/suppliers');
        return respons.data;
    }
}

export default supplierServices;
