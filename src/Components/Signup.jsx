import React from "react";
import Header from "../Layouts/Header";
import backgroundImage from '../assets/images/login.jpg';
import loginimage from '../assets/images/logo.svg';
import {Link, Redirect } from "react-router-dom";
class Signup extends React.Component {
    constructor(props){
      super(props);
      this.state={
        redirect:false,
        name:'',
        password:'',
        email:'',
        exception:''
    }
    this.handlechange=this.handlechange.bind(this);
    this.handleregister=this.handleregister.bind(this);
    }
    componentDidMount(){
        window.scrollTo(0, 0);
    }

    handleregister(event){
        event.preventDefault();
        if(this.state.name!=='' && this.state.email!=='' && this.state.password!==''){   
            var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
            if(this.state.name.match(alpha)){
                var email=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
                if(this.state.email.match(email)){
                    document.getElementById('submit').style.display='none';
                    document.getElementById('loader').style.display='inline-block';
                }
                else{
                    document.getElementById('exception').style.display='block';
                    this.setState({
                        exception:'Email Address invalid format'
                    })
                }
            }
            else{
                document.getElementById('exception').style.display='block';
                this.setState({
                    exception:'Contains only alphabets[A-Z]'
                })
            }
        
        }else{
            document.getElementById('exception').style.display='block';
            this.setState({
                exception:'Please Fill All fields'
            })
        }

    }


    handlechange(event){
        document.getElementById('exception').style.display='none';
        this.setState({
            exception: ""
        })
            const { name, value } = event.target;
            this.setState({ [name]: value });
    }


    render(){

        if(this.state.redirect){
            return <Redirect to="/dashoard"></Redirect>
        }
        else{
            return(
                <>
                <Header></Header>
            <div className="page-header">
            <div className="page-header-image" style={{backgroundImage:`url(${backgroundImage})`}}></div>
            <div className="container">
                <div className="col-md-12 content-center">
                    <div className="card-plain">
                    <form onSubmit={this.handleregister} className="form">
                        <div className="header">
                            <div className="logo-container">
                                <img alt="new image" src={loginimage} />
                            </div>
                            <h5>Sign Up</h5>
                            <span>Register a new membership</span>
                        </div>
                        <div className="content">                                                
                            <div className="input-group">
                                <input onChange={this.handlechange} id="name" name="name" type="text" className="form-control" placeholder="Enter User Name" />
                                <span className="input-group-addon">
                                    <i className="zmdi zmdi-account-circle"></i>
                                </span>
                            </div>
                            <div className="input-group">
                                <input onChange={this.handlechange} id="email" name="email" type="email" className="form-control" placeholder="Enter Email" />
                                <span className="input-group-addon">
                                    <i className="zmdi zmdi-email"></i>
                                </span>
                            </div>
                            <div className="input-group">
                                <input onChange={this.handlechange} id="password" name="password" type="password" placeholder="Password" className="form-control" />
                                <span className="input-group-addon">
                                    <i className="zmdi zmdi-lock"></i>
                                </span>
                            </div>  
    
                             <div style={{display:"none",margin:'0'}} id="exception" className="input-group">
                                <span style={{color:'#ff4070'}}>{this.state.exception}</span>
                            </div>         
    
                        </div>
                        <div className="footer text-center">
                            <input type="submit"  id="submit" className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light" value="SIGN UP" />
                            <a  id="loader" style={{display:"none",cursor:'wait'}} className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">
                            <i id="loginloader" className="fa fa-circle-o-notch fa-spin" style={{ fontSize: "1rem", color: "white", paddingRight: 2, paddingLeft: 2 }}></i>
                            </a>
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
}
export default Signup;