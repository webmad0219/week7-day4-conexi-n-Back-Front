import axios from "axios";

export default class pepeService{
    constructor(){

        this.service = axios.create({
            baseURL: "http://localhost:3000/api/"
        })
    }

    sayPepe = () => {
        const promise = this.service.get("")
        .then(res => {
            return res.data
        })
        .catch( err => {
            console.log(err)
        })

        return promise;
    }

    postPepe = (loquevamosaenviaralback) => {
        const promise = this.service.post("postBack", {loquevamosaenviaralback})
        .then(res => {
            console.log(res);
            return res.data;
        })

        return promise;
    }
}