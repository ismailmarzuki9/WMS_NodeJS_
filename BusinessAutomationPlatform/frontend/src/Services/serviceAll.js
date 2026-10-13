import Api from "../config/Api/Api";
class serviceAll {
    static api = new Api();

    static async getAll (endpoin2){
        const respon = await this.api.get(`/api${endpoin2}`);
        console.log("F 1",respon);
        return respon.data;
    }

    static async post(endpoin,data){
        console.log("post data")
        const respon = await this.api.post(`/api${endpoin}`, data);
        return respon.data;
    }
}
export default serviceAll;