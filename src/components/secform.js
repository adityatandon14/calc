import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import "../css/login.css";

import { Redirect } from "react-router-dom";
/* isme i need to make 2 apis 

localhost8000/api/userdata/id for existing button

localhost8000/api/userdata for new patient button

then when i submit calculator.js i to post that forms data on respective api

Even i need to send the patient id to calculator.js file and udhar se on post request

*/
class secform extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Ptid: null,
    };
  }

  fetchExistingPatient = (id) => {
    const MOCK_SERVICE = "http://8e013f28e5dd.ngrok.io/api/userlogin/";
    fetch(`${MOCK_SERVICE}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data.text);
        }
      })
      .catch((e) => {
        this.setState({ errors: e.error, isAuthenticated: false });
      });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  newPatient = (e, id) => {
    const {
      props: { history },
    } = this;
    e.preventDefault();
    history.push({ pathname: `/CALCULATOR`, state: { patientId: id } });
  };
  fetchExistingPatient= (e, id) => {
    const {
      props: { history },
    } = this;
    e.preventDefault();
    history.push({ pathname: `/LOGINCAL`, state: { patientId: id } });
  };
  render() {
    const { Ptid } = this.state;

    return (
      <div
        className="over"
        style={{ backgroundColor: "#242F3E", color: "rgb(0, 0, 0)" }}
      >
        
          <h1
            className="text-center w-100 mt-4"
            color="red"
            style={{
              
              fontSize: "3.6rem",
              color: "white",
            }}
            color="white"
          >
            LOGIN
          </h1>
          <div className="in">
            <form className="frm">
              <div className="ful">
                <h2 style={{fontSize:"30px"}}>LOGIN DETAILS</h2>
                <br/>
                <br/>
                
                <div className="top">
                  <label style={{fontSize:"20px"}}>HOSPITAL ID</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="ID"
                    name="Ptid"
                    onChange={this.handleChange}
                  />
                </div>
               <br/>
               <br/>
                <div className="form-group">
                  <label style={{fontSize:"20px"}}>PASSWORD</label>
                  <input
                    className="input"
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                  />
                </div>
                <br/>
                
                <button
                  className="bon"
                  type="submit"
                  onClick={(e) => this.fetchExistingPatient(e, Ptid)}
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>
          <div className="vl"></div>
          <div className="int">
            
            <button
              type="submit"
              className="yoyod"
              onClick={(e) => this.newPatient(e, Ptid)}
            >
            <h1
            className="text-center w-100 mt-4"
            color="red"
            style={{
              
              fontSize: "3.6rem",
              color: "white",
            }}
            color="white"
          >
            SKIP LOGIN
          </h1>
            </button>
          </div>
        </div>
      
    );
  }
}
export default secform;
