import React from "react";
import './home.css';
import Logo from '../../assets/images/logo.png'

class Home extends React.Component {
    render(){
        return (
            <header className="header-content header">
                <div className="logo-content">
                    <img src={Logo} className="logo-content-img" alt="logo" />
                    <div>
                        <span className="emp-text">EMPLOYEE</span><br/>
                        <span className="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
            </header>
        )
    }
}
export default Home;