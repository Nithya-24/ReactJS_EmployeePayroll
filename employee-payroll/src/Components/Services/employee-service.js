import config from "../Config/config";
const axios = require('axios').default;

class EmployeeService {
    baseURL = config.baseUrl;
    addEmployee = (data) => {
        return axios.post(`${this.baseURL}employee`, data);
    }

    getEmployee = () => {
        return axios.get(`${this.baseURL}employee`);
    }
}

export default new EmployeeService();