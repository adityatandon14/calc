import React, { Component } from "react";
import "../css/styles.css";
import "../css/fontawe.css";
import "../css/Aboutus.css";
import one from "../pics/one.jpeg";
import two from "../pics/two.jpeg";
import three from "../pics/three.jpeg";
import four from "../pics/four.jpeg";
import five from "../pics/five.jpeg";
import six from "../pics/six.jpeg";
import { Media } from "react-bootstrap";

export class aboutus extends Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=1"
        />
        <title>About</title>

        <meta
          name="keywords"
          content="student, designer, portfolio, college, India, Indian, college student, ui, ux, uiux, porfolio website"
        />
        <meta name="theme-color" content="white" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>Certification</title>
        <link rel="stylesheet" href="chh.css" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
          integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
        />

        <div
          className="container-fluid p-100 m-0"
          style={{ backgroundColor: "#242F3E", color: "rgb(0, 0, 0)" }}
        >{/*"#242F3E"*/}
          <div className="mainabout">
            
              <h1
                className="mention"
                color="white"
                style={{
                  textAlign:"center",
                  fontFamily: '"Permanent Marker", cursive',
                  fontSize: "3.6rem",
                  color: "white",
                }}
                color="white"
              >
                TEAM
              </h1>
              <br/>
              <br/>
            
            <h2 className="headline__sub-head" style={{
              textAlign:"center",
              fontFamily: '"Permanent Marker", cursive',
              fontSize: "2rem",
              color: "white",
            }}>FOUNDINNG MEMBERS</h2>
            <div className="row">
              <div className="col-lg-4">
                <img
                  src={one}
                  class="col-lg-12"
                  margin="10px"
                />
                <div className="text">Ms MONALISA BISWAS</div>
                <i className="fab fa-linkedin-square fa-2x" aria-hidden="true"></i>

              </div>
              <div className="col-lg-4">
                <img
                  src={two}
                  class="col-lg-12"
                  margin="10px"
                />
                <div className="text">Mr BURHANUDDIN RANGWALA</div>
                <i className="fab fa-linkedin-square fa-2x" aria-hidden="true"></i>
              </div>
              <div className="col-lg-4">
                <img
                  src={three}
                  class="col-lg-12"
                  margin="10px"
                />
                <div className="text">Dr VISHAL SHANBAGH</div>
                <i className="fab fa-linkedin-square fa-2x" aria-hidden="true"></i>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-4 jhatka" >
                <img
                  src={four}
                  class="col-lg-12"
                  margin="10px"
                />

                <div className="text">Mr MANORATH KHANNA</div>
                <i className="fab fa-linkedin-square fa-2x" aria-hidden="true"></i>
              </div>
              <div className="col-lg-4 jhatka2">
                <img
                  src={five}
                  class="col-lg-12"
                  margin="10px"
                />
                <div className="text">Dr VIJETHA SHENOY</div>
                <i className="fab fa-linkedin-square fa-2x" aria-hidden="true"></i>
              </div>
            </div>

            <br />
            <br />
          {/*   
          <h5 className="headline__sub-head" style={{
            textAlign:"center",
            fontFamily: '"Permanent Marker", cursive',
            fontSize: "2rem",
            color: "white",
          }}>SPECIAL MENTION</h5>
          <div className="row">
              <div className="col-lg-4">
                <img
                  src="https://i.pinimg.com/236x/6f/b4/4d/6fb44dd91a8378f95e066d96d26c7bb7.jpg"
                  class="col-lg-12"
                  margin="10px"
                />
                <div className="text">AMITABH6</div>
                <i className="fab fa-linkedin-square fa-2x" aria-hidden="true"></i>
              </div>
              <div className="col-lg-4">
                <img
                  src="https://i.pinimg.com/236x/6f/b4/4d/6fb44dd91a8378f95e066d96d26c7bb7.jpg"
                  class="col-lg-12"
                  margin="10px"
                />
                <div className="text">AMITABH7</div>
                <i className="fab fa-linkedin-square fa-2x" aria-hidden="true"></i>
              </div>
              <div className="col-lg-4">
                <img
                  src="https://i.pinimg.com/236x/6f/b4/4d/6fb44dd91a8378f95e066d96d26c7bb7.jpg"
                  class="col-lg-12"
                  margin="10px"
                />
                <div className="text">AMITABH8</div>
                <i className="fab fa-linkedin-square fa-2x" aria-hidden="true"></i>
              </div>
            </div>
          <br />
          <br />
        */}
          <h5 className="headline__sub-head" style={{
            textAlign:"center",
            fontFamily: '"Permanent Marker", cursive',
            fontSize: "2rem",
            color: "white",
          }}>DEVELOPERS</h5>
          <div className="developer">
          <div className="row">
              <div className="col-lg-4">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C5103AQFn3XBVi1JMOA/profile-displayphoto-shrink_200_200/0/1579021710378?e=1611187200&v=beta&t=aVQsgBsYtdABvKMhHgKHxer406UEirrWIL66FLyogPE"
                  class="col-lg-12"
                  margin="10px"
                />
                <div className="text">Mr ADITYA TANDON</div>
                <i className="fab fa-linkedin-square fa-2x" aria-hidden="true"></i>
              </div>
              <div className="col-lg-4">
                <img
                  src={six}
                  class="col-lg-12"
                  margin="15px"
                  style={{height:"195px"}}
                />
                <div className="text">Mr AKSHAT DOKANIA</div>
                <i className="fab fa-linkedin-square fa-2x" aria-hidden="true"></i>
              </div>
              
            </div>
            </div>
        
          
          </div>
        </div>
      </div>
    );
  }
}

export default aboutus;
