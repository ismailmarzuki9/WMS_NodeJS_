class Api {
    baseURL = import.meta.env.VITE_API_URL;

    async get(endpoint) {
        const responst = await fetch(`${this.baseURL}${endpoint}`);
        console.log(responst);
        if (!responst.ok) {
            throw new Error(`HTTP Error : ${responst.status}`);
        }
        
        return await responst.json();
    }
}

// API = new Api('/api/suppliers');
// console.log(API);

export default Api;