import React, { useEffect, useState } from "react";
import './dashboard.css';
import {Link} from "react-router-dom";
import Employee from "./employee";
import axios from 'axios';
import config from "../Config/config";


function PayrollDashboard() {
    const baseURL = config.baseUrl;

    const [employeeArray, setEmployee] = useState([]);

    useEffect(() => {
        getAllEmployees();
    },
    []);

    const getAllEmployees = () => {
       axios.get(`${baseURL}employee`).then(employee => {
           const allEmployees = employee.data;
           setEmployee(allEmployees);
       })
    }
    

    return(
        <div className="main-content">
            <div className="header-content employee-header">
                <div className="emp-detail-text">
                    Employee Details
                    <div className="emp-count"></div>
                </div>
                <Link to="/payroll-form" className="add-button">
                           Add Employee
                </Link>
            </div>

            <div className="table-main">
            <Employee employeeArray={employeeArray}/>
                {/* <table id="table-display" className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Start Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><img className="profile" src={ProfilePic1} alt="profile_img-1"/></td>
                            <td>Nith</td>
                            <td>Female</td>
                            <td>
                                <div className="dept-label">Engineer</div>
                                <div className="dept-label">Finance</div>
                            </td>
                            <td>3500000</td>
                            <td>10 Jan 2016</td>
                            <td>
                                <img src={edit_btn} alt="delete" id="1" />
                                <img src={delete_btn} alt="edit" id="1" />
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><img className="profile" src={ProfilePic2} alt="profile_img-2"/></td>
                            <td>Ram</td>
                            <td>Male</td>
                            <td>
                                <div className="dept-label">Others</div>
                                <div className="dept-label">Finance</div>
                            </td>
                            <td>2500000</td>
                            <td>17 Feb 2017</td>
                            <td>
                                <img src={edit_btn} alt="delete" id="2" />
                                <img src={delete_btn} alt="edit" id="2" />
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><img className="profile" src={ProfilePic3} alt="profile_img-3"/></td>
                            <td>Jona</td>
                            <td>Female</td>
                            <td>
                                <div className="dept-label">HR</div>
                                <div className="dept-label">Others</div>
                            </td>
                            <td>3000000</td>
                            <td>20 Mar 2018</td>
                            <td>
                                <img src={edit_btn} alt="delete" id="3" />
                                <img src={delete_btn} alt="edit" id="3" />
                            </td>
                        </tr>
                    </tbody>
                </table> */}
            </div>
        </div>  
    )
}

export default PayrollDashboard;