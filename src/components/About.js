import React, { Component } from "react";
import "../css/About.css";
import { Link } from "react-router-dom";

//import Appli from "./LOGIN/Appli";

export class About extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
         {/*<div className="nav-btn navbar navbar-expand-lg navbar-light bg-white">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="nav-links mr-auto">
              <ul className="navbar-nav mr-auto">
                <li className="lefto">
                  <Link to="/calculator">RISK CALCULATOR </Link> {""}
                  <br></br>
                </li>
                <li> </li>
                <li>
                  <Link to="/LOGIN"> LOGIN</Link>
                </li>
                <li> </li>
                <li>
                  <Link to="/TEAM">TEAM</Link>
                </li>
                <li> </li>
                <li>
                  <Link to="/APPRAISAL"> APPRAISAL</Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        <div>
          <div className="contactUsHeading">
            
          </div>
          <h1 className="Heading">RISK CALCULATOR</h1>
          <section>
            <div className="container-fluid p-0" id="who">
              
            </div>
          </section>
          <div className="row1">
              {/*<div className="flex-center">
              <a href>
                <i className="fa fa-github fa-4x icon-3d" />
              </a>
              <a href>
                <i className="fa fa-facebook fa-4x icon-3d" />
              </a>
              <a href>
                <i className="fa fa-instagram fa-4x icon-3d" />
              </a>
              <a href>
                <i className="fa fa-twitter fa-4x icon-3d" />
              </a>
              </div>*/}
              <div className="flex-center">
              <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="left"style={{ marginLeft:"10px"}}>
              <h3 className="white">MISSION</h3>
              <p className="white">A mission statement is a short statement of why an organization exists, what its overall goal is, identifying the goal of its operations: what kind of product or service it provides.</p>
            </div>
            <div className="right">
              <h3 className="white">PLAN</h3>
              <p className="white">A goal statement is the foundation that you use to plan your work. Good goal statement examples should be properly documented and detailed. It should also completely define </p>
            </div>
          </div>
          </div>
          </div>
          <footer>
            <p>© Copyright 2020 MIT-Manipal</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default About;
