

class Api {

    baseURL = process.env.VITE_API_URL;
    getAll = this.baseURL('/api/suppliers')
    constructor(){
        console.log(this.getAllL);
    }
}

export default Api;