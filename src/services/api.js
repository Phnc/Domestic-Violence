import axios from "axios";

const api = axios.create({
    baseURL: "https://domestic-violence.herokuapp.com/data",
    timeout: 5000,
});

export default api;