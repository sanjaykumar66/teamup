import React from "react";
import Header from "../Layouts/Header";
import backgroundImage from '../assets/images/login.jpg';
import loginimage from '../assets/images/logo.svg';
import {Link } from "react-router-dom";
class Signup extends React.Component {
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
                <form className="form" method action>
                    <div className="header">
                        <div className="logo-container">
                            <img alt="new image" src={loginimage} />
                        </div>
                        <h5>Sign Up</h5>
                        <span>Register a new membership</span>
                    </div>
                    <div className="content">                                                
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Enter User Name" />
                            <span className="input-group-addon">
                                <i className="zmdi zmdi-account-circle"></i>
                            </span>
                        </div>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Enter Email" />
                            <span className="input-group-addon">
                                <i className="zmdi zmdi-email"></i>
                            </span>
                        </div>
                        <div className="input-group">
                            <input type="password" placeholder="Password" className="form-control" />
                            <span className="input-group-addon">
                                <i className="zmdi zmdi-lock"></i>
                            </span>
                        </div>         
                    </div>
                    <div className="footer text-center">
                        <a  className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">SIGN UP</a>
                        <h6 className="m-t-20">
                           <Link className="link" to={"/login"}>
                                You already have a membership?
                           </Link> 
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
export default Signup;