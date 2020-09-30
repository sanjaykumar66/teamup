import React from "react";
import { Link } from "react-router-dom";

import loginimage from '../assets/images/logo.svg';
import profileimg from "../assets/images/profile_av.jpg"
import avatar1 from "../assets/images/sm/avatar1.jpg"
import avatar2 from "../assets/images/sm/avatar2.jpg"
import avatar3 from "../assets/images/sm/avatar3.jpg"
import avatar4 from "../assets/images/sm/avatar4.jpg"
import avatar5 from "../assets/images/sm/avatar5.jpg"
import avatar6 from "../assets/images/sm/avatar6.jpg"


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="App">
        <div className="page-loader-wrapper">
          <div className="loader">
            <div className="m-t-30">
              <img
                className="zmdi-hc-spin"
                src={loginimage}
                width="48"
                height="48"
                alt="Compass"
              />
            </div>
            <p>Please wait...</p>
          </div>
        </div>
        {/* Overlay For Sidebars */}
        <div className="overlay"></div>
        {/* Top Bar */}
        <nav className="navbar">
          <div className="col-12">
            <div className="navbar-header">
              <a href="javascript:void(0);" className="bars"></a>
              <a className="navbar-brand" href>
                <img
                  src={loginimage}
                  width="30"
                  alt="Compass"
                />
                <span className="m-l-10">Compass</span>
              </a>
            </div>
            <ul className="nav navbar-nav navbar-left">
              <li>
                <a
                  href="javascript:void(0);"
                  className="ls-toggle-btn"
                  data-close="true"
                >
                  <i className="zmdi zmdi-swap"></i>
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                {" "}
                <a
                  
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                >
                  <i className="zmdi zmdi-flag"></i>
                  <div className="notify">
                    <span className="heartbit"></span>
                    <span className="point"></span>
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-right slideDown">
                  <li className="header">TASKS</li>
                  <li className="body">
                    <ul className="menu tasks list-unstyled">
                      <li>
                        <a >
                          <div className="progress-container progress-primary">
                            <span className="progress-badge">
                              Footer display issue
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-warning"
                                role="progressbar"
                                aria-valuenow="86"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{width: "86%"}}
                              >
                                <span className="progress-value">86%</span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a >
                          <div className="progress-container progress-info">
                            <span className="progress-badge">
                              Answer GitHub questions
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-warning"
                                role="progressbar"
                                aria-valuenow="35"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{width: "35%"}}
                              >
                                <span className="progress-value">35%</span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a >
                          <div className="progress-container progress-success">
                            <span className="progress-badge">
                              Solve transition issue
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-warning"
                                role="progressbar"
                                aria-valuenow="72"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{width: "72%"}}
                              >
                                <span className="progress-value">72%</span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a >
                          <div className="progress-container">
                            <span className="progress-badge">
                              {" "}
                              Create new dashboard
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-warning"
                                role="progressbar"
                                aria-valuenow="45"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{width: "45%"}}
                              >
                                <span className="progress-value">45%</span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a >
                          <div className="progress-container progress-warning">
                            <span className="progress-badge">
                              Panding Project
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-warning"
                                role="progressbar"
                                aria-valuenow="29"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{width: "29%"}}
                              >
                                <span className="progress-value">29%</span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                    <a >View All</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="sign-in.html" className="mega-menu" data-close="true">
                  <i className="zmdi zmdi-power"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/*Left Sidebar*/}
        <aside id="leftsidebar" className="sidebar">
          {/* Menu */}
          <div className="menu">
            <ul className="list">
              <li>
                <div className="user-info">
                  <div className="image">
                    <a href="profile.html">
                      <img
                        src={profileimg}
                        alt="User"
                      />
                    </a>
                  </div>
                  <div className="detail">
                    <h4>Michael</h4>
                  </div>
                </div>
              </li>
              <li className="active open">
                <a>
                  <i className="zmdi zmdi-blogger"></i>
                  <span>Dashboard</span>
                </a>
              </li>

              <li>
                <a>
                  <i className="zmdi zmdi-home"></i>
                  <span>My Organization</span>
                </a>
              </li>
              <li>
                <a>
                  <i className="zmdi zmdi-plus-circle"></i>
                  <span>Profile</span>
                </a>
              </li>
            </ul>
          </div>
          {/*#Menu*/}
        </aside>
        <section className="content blog-page">
          <div className="block-header">
            <div className="row">
              <div className="col-lg-7 col-md-6 col-sm-12">
                <h2>
                  Blog Dashboard
                  <small>Welcome to Compass</small>
                </h2>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12">
                <select className="form-control show-tick">
                  <option disabled>-- Please select Team --</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-5 col-md-12">
                <div className="card ">
                  <div className="header">
                    <h2>
                      <strong>Latest</strong> Comments
                    </h2>
                    <ul className="header-dropdown">
                      <li className="dropdown">
                        {" "}
                        <a
                          
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          <i className="zmdi zmdi-more"></i>{" "}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                          <li>
                            <a >Edit</a>
                          </li>
                          <li>
                            <a >Delete</a>
                          </li>
                          <li>
                            <a >Report</a>
                          </li>
                        </ul>
                      </li>
                      <li className="remove">
                        <a role="button" className="boxs-close">
                          <i className="zmdi zmdi-close"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="body">
                    <ul className="inbox-widget list-unstyled clearfix">
                      <li className="inbox-inner">
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              {" "}
                              <img
                                src={avatar1}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">John Doe</p>
                              <p className="inbox-message">
                                Lorem Ipsum is simply dummy text of the been the
                                industry's
                              </p>
                              <p className="inbox-date">12:34 PM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="inbox-inner">
                        {" "}
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              {" "}
                              <img
                                src={avatar2}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Maryam Amiri</p>
                              <p className="inbox-message">
                                Lorem Ipsum is simply dummyLorem Ipsum has been
                                the industry's
                              </p>
                              <p className="inbox-date">10:34 AM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="inbox-inner">
                        {" "}
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              {" "}
                              <img
                                src={avatar3}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Fidel Tonn</p>
                              <p className="inbox-message">
                                text of the printing and has been the industry's
                              </p>
                              <p className="inbox-date">15:34 PM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>{" "}
                      </li>
                      <li className="inbox-inner">
                        {" "}
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              {" "}
                              <img
                                src={avatar4}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Gary Camara</p>
                              <p className="inbox-message">
                                simply dummy text of the printing and
                                typesetting industry's
                              </p>
                              <p className="inbox-date">11:10 AM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>{" "}
                      </li>
                      <li className="inbox-inner">
                        {" "}
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              <img
                                src={avatar5}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Tim Hank</p>
                              <p className="inbox-message">
                                text of the industry. Lorem Ipsum has been the
                                industry's
                              </p>
                              <p className="inbox-date">18:45 PM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="inbox-inner">
                        {" "}
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              {" "}
                              <img
                                src={avatar6}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Hossein Shams </p>
                              <p className="inbox-message">
                                text of the printing and has been the industry's
                              </p>
                              <p className="inbox-date">15:34 PM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12">
                <div className="card ">
                  <div className="header">
                    <h2>
                      <strong>Latest</strong> Comments
                    </h2>
                    <ul className="header-dropdown">
                      <li className="dropdown">
                        {" "}
                        <a
                          
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          <i className="zmdi zmdi-more"></i>{" "}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                          <li>
                            <a >Edit</a>
                          </li>
                          <li>
                            <a >Delete</a>
                          </li>
                          <li>
                            <a >Report</a>
                          </li>
                        </ul>
                      </li>
                      <li className="remove">
                        <a role="button" className="boxs-close">
                          <i className="zmdi zmdi-close"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="body">
                    <ul className="inbox-widget list-unstyled clearfix">
                      <li className="inbox-inner">
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              {" "}
                              <img
                                src={avatar1}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">John Doe</p>
                              <p className="inbox-message">
                                Lorem Ipsum is simply dummy text of the been the
                                industry's
                              </p>
                              <p className="inbox-date">12:34 PM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="inbox-inner">
                        {" "}
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              {" "}
                              <img
                                src={avatar2}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Maryam Amiri</p>
                              <p className="inbox-message">
                                Lorem Ipsum is simply dummyLorem Ipsum has been
                                the industry's
                              </p>
                              <p className="inbox-date">10:34 AM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="inbox-inner">
                        {" "}
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              {" "}
                              <img
                                src={avatar3}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Fidel Tonn</p>
                              <p className="inbox-message">
                                text of the printing and has been the industry's
                              </p>
                              <p className="inbox-date">15:34 PM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>{" "}
                      </li>
                      <li className="inbox-inner">
                        {" "}
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              {" "}
                              <img
                                src={avatar4}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Gary Camara</p>
                              <p className="inbox-message">
                                simply dummy text of the printing and
                                typesetting industry's
                              </p>
                              <p className="inbox-date">11:10 AM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>{" "}
                      </li>
                      <li className="inbox-inner">
                        {" "}
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              <img
                                src={avatar5}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Tim Hank</p>
                              <p className="inbox-message">
                                text of the industry. Lorem Ipsum has been the
                                industry's
                              </p>
                              <p className="inbox-date">18:45 PM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="inbox-inner">
                        {" "}
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              {" "}
                              <img
                                src={avatar6}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Hossein Shams </p>
                              <p className="inbox-message">
                                text of the printing and has been the industry's
                              </p>
                              <p className="inbox-date">15:34 PM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12">
                <div className="card ">
                  <div className="header">
                    <h2>
                      <strong>Latest</strong> Comments
                    </h2>
                    <ul className="header-dropdown">
                      <li className="dropdown">
                        <a
                          
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          <i className="zmdi zmdi-more"></i>{" "}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                          <li>
                            <a >Edit</a>
                          </li>
                          <li>
                            <a >Delete</a>
                          </li>
                          <li>
                            <a >Report</a>
                          </li>
                        </ul>
                      </li>
                      <li className="remove">
                        <a role="button" className="boxs-close">
                          <i className="zmdi zmdi-close"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="body">
                    <ul className="inbox-widget list-unstyled clearfix">
                      <li className="inbox-inner">
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              {" "}
                              <img
                                src={avatar1}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">John Doe</p>
                              <p className="inbox-message">
                                Lorem Ipsum is simply dummy text of the been the
                                industry's
                              </p>
                              <p className="inbox-date">12:34 PM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="inbox-inner">
                        {" "}
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              {" "}
                              <img
                                src={avatar2}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Maryam Amiri</p>
                              <p className="inbox-message">
                                Lorem Ipsum is simply dummyLorem Ipsum has been
                                the industry's
                              </p>
                              <p className="inbox-date">10:34 AM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="inbox-inner">
                        {" "}
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              {" "}
                              <img
                                src={avatar3}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Fidel Tonn</p>
                              <p className="inbox-message">
                                text of the printing and has been the industry's
                              </p>
                              <p className="inbox-date">15:34 PM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>{" "}
                      </li>
                      <li className="inbox-inner">
                        {" "}
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              {" "}
                              <img
                                src={avatar4}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Gary Camara</p>
                              <p className="inbox-message">
                                simply dummy text of the printing and
                                typesetting industry's
                              </p>
                              <p className="inbox-date">11:10 AM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>{" "}
                      </li>
                      <li className="inbox-inner">
                        {" "}
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              <img
                                src={avatar5}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Tim Hank</p>
                              <p className="inbox-message">
                                text of the industry. Lorem Ipsum has been the
                                industry's
                              </p>
                              <p className="inbox-date">18:45 PM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="inbox-inner">
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              <img
                                src={avatar6}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Hossein Shams </p>
                              <p className="inbox-message">
                                text of the printing and has been the industry's
                              </p>
                              <p className="inbox-date">15:34 PM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12">
                <div className="card ">
                  <div className="header">
                    <h2>
                      <strong>Latest</strong> Comments
                    </h2>
                    <ul className="header-dropdown">
                      <li className="dropdown">
                        {" "}
                        <a
                          
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          <i className="zmdi zmdi-more"></i>{" "}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                          <li>
                            <a >Edit</a>
                          </li>
                          <li>
                            <a >Delete</a>
                          </li>
                          <li>
                            <a >Report</a>
                          </li>
                        </ul>
                      </li>
                      <li className="remove">
                        <a role="button" className="boxs-close">
                          <i className="zmdi zmdi-close"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="body">
                    <ul className="inbox-widget list-unstyled clearfix">
                      <li className="inbox-inner">
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              {" "}
                              <img
                                src={avatar1}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">John Doe</p>
                              <p className="inbox-message">
                                Lorem Ipsum is simply dummy text of the been the
                                industry's
                              </p>
                              <p className="inbox-date">12:34 PM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="inbox-inner">
                        {" "}
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              {" "}
                              <img
                                src={avatar2}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Maryam Amiri</p>
                              <p className="inbox-message">
                                Lorem Ipsum is simply dummyLorem Ipsum has been
                                the industry's
                              </p>
                              <p className="inbox-date">10:34 AM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="inbox-inner">
                        {" "}
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              {" "}
                              <img
                                src={avatar3}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Fidel Tonn</p>
                              <p className="inbox-message">
                                text of the printing and has been the industry's
                              </p>
                              <p className="inbox-date">15:34 PM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>{" "}
                      </li>
                      <li className="inbox-inner">
                        {" "}
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              {" "}
                              <img
                                src={avatar4}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Gary Camara</p>
                              <p className="inbox-message">
                                simply dummy text of the printing and
                                typesetting industry's
                              </p>
                              <p className="inbox-date">11:10 AM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>{" "}
                      </li>
                      <li className="inbox-inner">
                        {" "}
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              <img
                                src={avatar5}
                                className="rounded"
                                alt
                              />{" "}
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Tim Hank</p>
                              <p className="inbox-message">
                                text of the industry. Lorem Ipsum has been the
                                industry's
                              </p>
                              <p className="inbox-date">18:45 PM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="inbox-inner">
                        <a href="#">
                          <div className="inbox-item">
                            <div className="inbox-img">
                              <img
                                src={avatar6}
                                className="rounded"
                                alt
                              />
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Hossein Shams </p>
                              <p className="inbox-message">
                                text of the printing and has been the industry's
                              </p>
                              <p className="inbox-date">15:34 PM</p>
                            </div>
                            <div className="hover_action">
                              <a href="#">
                                <i className="zmdi zmdi-favorite"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-edit"></i>
                              </a>
                              <a href="#">
                                <i className="zmdi zmdi-check-circle"></i>
                              </a>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Jquery Core Js */}
      </div>
    );
  }
}

export default Dashboard;
