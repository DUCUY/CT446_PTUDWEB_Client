import createApiClient from "./api.service";

class userService {
    constructor(baseUrl = "http://localhost:5000/user") {
        this.api = createApiClient(baseUrl);
    }

    async get(id) {
        return (await this.api.getuser(`/${id}`)).data;
    }

    async getAll() {
        console.log(await this.api.get("/").data);
        return (await this.api.get("/")).data;
    }

    
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }

    async deleteAll() {
        return (await this.api.delete("/")).data;
    }
    async create(data) {
        // console.log(data);
        return (await this.api.post("/signUp", data)).data;
    }

    async up(data){
        return (await this.api.post("/signIn", data)).data;
    }
    

}

export default new userService();
 