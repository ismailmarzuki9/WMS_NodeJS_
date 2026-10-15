class Api {

    // baseURL = import.meta.env.VITE_API_URL;
    baseURL = 'http://localhost:8080';

    async get(endpoint) {
        const responst = await fetch(`${this.baseURL}${endpoint}`);
        // console.log("ini get dari front", responst);
        if (!responst.ok) {
            throw new Error(`HTTP Error : ${responst.status}`);
        }
        
        return await responst.json();
    }

    async post(endpoint, data) {
        // console.log(" yang mau di post", endpoint, data);
        
        const responst = await fetch(`${this.baseURL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        // console.log("ini post dari front", responst);
        if (!responst.ok) {
            throw new Error(` HTTP Error : ${responst.status}`);           
        }
        return await responst.json();
    }

    async getId(endpoin) {
        const responst = await fetch(`${this.baseURL}${endpoin}`);
        if (!responst.ok) {
            throw new Error(`HTTP Error : ${responst.status}`);
        }
        
        return await responst.json();
    }
}


export default Api;