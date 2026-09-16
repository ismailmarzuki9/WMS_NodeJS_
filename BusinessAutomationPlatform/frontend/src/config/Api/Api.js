class Api {

    // baseURL = import.meta.env.VITE_API_URL;
    baseURL = 'Http://localhost:8080';

    async get(endpoint) {
        const responst = await fetch(`${this.baseURL}${endpoint}`);
        // console.log(responst);
        if (!responst.ok) {
            throw new Error(`HTTP Error : ${responst.status}`);
        }
        
        return await responst.json();
    }
}


export default Api;