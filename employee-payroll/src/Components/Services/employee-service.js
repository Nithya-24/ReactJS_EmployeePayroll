import config from "../Config/config";
// const axios = require('axios').default;
import axios from "axios";
class EmployeeService {
    baseURL = config.baseUrl;
    addEmployee = (data) => {
        return axios.post(`${this.baseURL}employee`, data);
    }

    getAllEmployees() {
        return axios.get(`${this.baseURL}/get/all`);
      }

      getEmployee(employee_id) {
        return axios.get(`${this.baseURL}employee/${employee_id}`);
      }

    updateEmployee(employee_id,data) {
        return axios.put(`${this.baseURL}employee/${employee_id}`, data);
      }
      
      deleteEmployee(employee_id) {
        return axios.delete(`${this.baseURL}employee/${employee_id}`);
        
      }
    }  

export default new EmployeeService();