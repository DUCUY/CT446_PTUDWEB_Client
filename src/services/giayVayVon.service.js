import createApiClient from "./api.service";

class giayVayVonService {
    constructor(baseUrl = "http://localhost:5000/giayVayVon") {
        this.api = createApiClient(baseUrl);
    }

    async get(id) {
        return (await this.api.getuser(`/${id}`)).data;
    }

    async getAll() {
        return (await this.api.get("/")).data;
    }

    
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }

    async deleteAll() {
        return (await this.api.delete("/")).data;
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }

    // async up(data){
    //     return (await this.api.post("/", data)).data;
    // }
    

}

export default new giayVayVonService();
 