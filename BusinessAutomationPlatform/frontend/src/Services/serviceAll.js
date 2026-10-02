import Api from "../config/Api/Api";
class serviceAll {
    static api = new Api();

    static async getAll (endpoin2){
        const respon = await this.api.get(`/api${endpoin2}`);
        // console.log(respon);
        return respon.data;
    }
}
export default serviceAll;