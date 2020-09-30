import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="theme-cyan authentication sidebar-collapse">
        <Router >
      <Switch> 
           <Route  path='/login' component={Login} />


           <Route  path='/register' component={Signup} />

           <Route  path='/dashboard' component={Dashboard} />


        </Switch>
        </Router>
      </div>
  );
}

export default App;
