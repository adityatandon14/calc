import React, { Component } from "react";
import './About.css';
import { Link } from 'react-router-dom';

import Appli from "./LOGIN/Appli";



export class About extends Component {
  render() {
    return (
        
        <div className="container-fluid p-0">
        <div className="nav-btn navbar navbar-expand-lg navbar-light bg-white">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="nav-links mr-auto" >
              <ul className="navbar-nav mr-auto">
              <li className="lefto"> 
           <Link to="/calculator">RISK CALCULATOR </Link> {''}
           <br></br>
            </li> 
               <li> {" "}   </li>
            <li> 
           <Link to="/login"> LOGIN</Link> 
           </li> 
           <li> {" "}   </li>
           <li> 
          <Link to="/aboutus">ABOUT</Link> 
          </li> 
          <li> {" "}   </li>
          <li> 
         <Link to="/Certificates"> CERTIFICATION</Link> 
         </li> 
             </ul>
              
            </div>
          </div>
        </div>
      
        
                <div>
                  <div className="contactUsHeading">
                    <h1 className="Heading">RISK CALCULATOR</h1>
                  </div>
                  <section>
                    <div className="container-fluid p-0" id="who">
                      <div className="row">
                        <h2>Who Are WE</h2>
                        <p>We examine people using sophesticated ai ml tools and tell them if they are at a risk.
                        </p>
                      </div>
                    </div>
                  </section>
                  <div className="connect p-0">
                    <div className="flex-center">
                      <a href><i className="fa fa-github fa-4x icon-3d" /></a> 
                      <a href><i className="fa fa-facebook fa-4x icon-3d" /></a> 
                      <a href><i className="fa fa-instagram fa-4x icon-3d" /></a> 
                      <a href><i className="fa fa-twitter fa-4x icon-3d" /></a> 
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
