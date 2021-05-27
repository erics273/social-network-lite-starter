import axios from 'axios';

class APIService {

    constructor(url = 'https://socialnetworklite.herokuapp.com', client = axios){
        this.url = url;
        this.client = client;
    }

    login(credentials){
        return this.client.post(`${this.url}/auth/login`, credentials);
    }

}

export default APIService;