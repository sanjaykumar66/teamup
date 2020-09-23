import React from "react";
import {Link } from "react-router-dom";
import Header from "../Layouts/Header";
import backgroundImage from '../assets/images/login.jpg';
import loginimage from '../assets/images/logo.svg';

class Login extends React.Component {
    constructor(props){
      super(props);

    }
    componentDidMount(){
        window.scrollTo(0, 0);
    }


    render(){
        return(
            <>
            <Header></Header>
        <div className="page-header">
        <div className="page-header-image" style={{backgroundImage:`url(${backgroundImage})`}}></div>
        <div className="container">
            <div className="col-md-12 content-center">
                <div className="card-plain">
                    <form className="form">
                        <div className="header">
                            <div className="logo-container">
                                <img alt="new image" src={loginimage}/>
                            </div>
                            <h5>Log in</h5>
                        </div>
                        <div className="content">                                                
                            <div className="input-group input-lg">
                                <input type="text" className="form-control" placeholder="Enter User Name" />
                                <span className="input-group-addon">
                                    <i className="zmdi zmdi-account-circle"></i>
                                </span>
                            </div>
                            <div className="input-group input-lg">
                                <input type="password" placeholder="Password" className="form-control" />
                                <span className="input-group-addon">
                                    <i className="zmdi zmdi-lock"></i>
                                </span>
                            </div>
                        </div>
                        <div className="footer text-center">
                           
                           <a className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">SIGN IN</a>
                          
                            <h6 className="m-t-20">
                                <a  className="link">Forgot Password?</a>
                            </h6>

                            <h6 className="m-t-20">
                                <Link to={"/register"} className="link">Create new account?</Link>
                            </h6>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>);
    }
}
export default Login;