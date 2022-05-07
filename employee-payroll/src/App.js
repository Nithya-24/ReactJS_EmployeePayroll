import './App.css';
import React from 'react';
import PayrollForm from './Components/Payroll_Form/payroll-form';
import Home from "./Components/Home/home";
import PayrollDashboard from './Components/Dashboard/dashboard';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <>       
      <Home />
      <Router>
      <div className="App">
              <Switch>
                  <Route exact path="/" component={PayrollDashboard}></Route>
                  <Route exact path="/payroll-form" component={PayrollForm}></Route>
                  <Route exact path="/payroll-form/:id" component={PayrollForm}></Route>
                  {/* <Route exact path="/dashboard" component={PayrollDashboard}></Route> */}
              </Switch>
        </div>
      </Router>
      </>
  );
}

export default App;