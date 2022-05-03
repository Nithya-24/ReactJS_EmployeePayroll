import React from "react";
import './employee.css';
import editEmp from '../../assets/icons/create-black-18dp.svg';
import deleteEmp from '../../assets/icons/delete-black-18dp.svg';
import ProfilePic1 from '../../assets/profile-images/Ellipse -1.png';
import ProfilePic2 from '../../assets/profile-images/Ellipse -2.png';
import ProfilePic3 from '../../assets/profile-images/Ellipse -3.png';
import ProfilePic4 from '../../assets/profile-images/Ellipse -4.png';
import { withRouter } from "react-router-dom";

const Employee = (props) => {

     return (
        <table id="table-display" className="table">
            <tr key={-1}>
                <th>Employee ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Start Date</th>
                <th>Actions</th>
            </tr>
                {
                    props.employeeArray && props.employeeArray.map((element, index) =>(
                       <tr key={index}>
                            <td>{element.id}</td>
                            
                            <td><img className="profile" src={element.profileURL===
                            "../../assets/profile-images/Ellipse -1.png"
                            ? ProfilePic1
                            : element.profileURL ===
                              "../../assets/profile-images/Ellipse -2.png"
                            ? ProfilePic2
                            : element.profileURL ===
                              "../../assets/profile-images/Ellipse -3.png"
                            ? ProfilePic3
                            : ProfilePic4
                        }
                         alt=""/></td>
                            <td>{element.name}</td>
                            <td>{element.gender}</td>
                            <td>
                                {element.department && element.department.map((dept => 
                                    (<div className="dept-label">{dept}</div>)))}
                            </td>
                            <td>{element.salary}</td>
                            <td>{element.startDate}</td>
                            <td>
                                <img src={editEmp} alt="delete" id="1"/>
                                <img src={deleteEmp} alt="edit" id="1"/>
                            </td>
                       </tr> 
                    ))
                }
        </table>
    );
}

export default withRouter(Employee);