import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from "./Components/Signup";
function App() {
  return (
    <div className="theme-cyan authentication sidebar-collapse">
        <Router >
      <Switch> 
           <Route  path='/login' component={Login} />


           <Route  path='/register' component={Signup} />


        </Switch>
        </Router>
      </div>
  );
}

export default App;
