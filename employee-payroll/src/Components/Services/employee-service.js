import config from "../Config/config";
// const axios = require('axios').default;
import axios from "axios";
class EmployeeService {
    baseURL = "http://localhost:8080/employee";
    addEmployee = (data) => {
        return axios.post(`${this.baseURL}/create`, data);
    }

    getAllEmployees() {
        return axios.get(`${this.baseURL}/get`);
      }

      getEmployee(employee_id) {
        return axios.get(`${this.baseURL}/get/${employee_id}`);
      }

    updateEmployee(employee_id,data) {
        return axios.put(`${this.baseURL}/update/${employee_id}`, data);
      }
      
      deleteEmployee(employee_id) {
        return axios.delete(`${this.baseURL}/delete/${employee_id}`);
        
      }
    }  

export default new EmployeeService();