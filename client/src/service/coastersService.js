import axios from "axios";

export default class pepeService {

    constructor() {

        this.service = axios.create({
            baseURL: "http://localhost:3000/api/"
        })
    }

    getCoasters = () => {
        const promise = this.service.get("coasters")
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })

        return promise;
    }

    postNewCoaster = coaster => {
        const promise = this.service.post("postCoaster", coaster)
            .then(res => {
                console.log(res);
                return res.data;
            })

        return promise;
    }


}
