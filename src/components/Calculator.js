import React, { Fragment, Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../css/alignmentbutton.css';
import '../css/calc.css';
import '../css/rpage.css';
import '../css/rpage1.css';
import '../css/rpage2.css';
import '../css/style.css';
import {checkParam} from './nabuttons';
import { Dropdown } from 'semantic-ui-react';
import { Checkbox } from 'semantic-ui-react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { data } from 'jquery';

//import LayoutTextFields from './LayoutTextFields';
const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = 'https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css';
document.head.appendChild(styleLink);
//these are the options for epidem dropdown
const options = [
  {
    key: 'H/O PULMONARY DISEASE',
    text: 'H/O PULMONARY DISEASE',
    value: 'H/O PULMONARY DISEASE'
  },
  { key: 'H/O CKD', text: 'H/O CKD', value: 'H/O CKD' },
  {
    key: 'H/O DM/(HbA1c>7.6)',
    text: 'H/O DM/(HbA1c>7.6)',
    value: 'H/O DM/(HbA1c>7.6)'
  },
  { key: 'H/O HCN', text: 'H/O HCN', value: 'H/O HCN' },
  { key: 'H/O HIV', text: 'H/O HIV', value: 'H/O HIV' },
  {
    key: 'IMMUNOSUPRESSION',
    text: 'IMMUNOSUPRESSION',
    value: 'IMMUNOSUPRESSION'
  }
];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
//basic styling property using library functions
const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '25ch'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));
/*api */
const MOCK_SERVICE = 'http://akshatrest.herokuapp.com/api/trial/';
/*api ka name and defining all parameter*/
export class Calculator extends Component {
  // const classes = useStyles();
  constructor() {
    super();
    this.state = {
      checked: false,
      age: '50',
      spo: '',
      heartrate: '',
      resrate: '',
      drpdownValue: '',
      ddimer: '',
      cpk: '',
      crp: '',
      ldh: '',
      tropo: '',
      ferr: '',
      absolute: '',
      ctscan: '',
      abg: '',
      checkAbg: '',
      measure_ddimer: 1,
      measure_cpk: 1,
      measure_crp: 1,
      measure_ldh: 1,
      measure_tropo: 1,
      measure_ferr: 1,
      measure_absolute: 1,
      measure_ctscan: 1,
      measure_abg: 1,
      measure_checkAbg: 1,
      responseData: {},
      modalOpen: false
    };
    this.changeBind = this.changeBind.bind(this);
  }
  /*for the checked box*/

  changeBind() {
    this.setState({ checked: !this.state.checked });
  }

  /*for all the values getting filled*/

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  toggleModal = () =>
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));

  /*dropdown ki values set ke lie*/

  handleDropDownChange = (e, { value }) => {
    this.setState({ drpdownValue: value });
  };

  /*this function is for units change if its sec unit multiply by 1000 and send the values*/

  handleLabFindings = e => {
    const { id, value } = e.target;
    const meaureToCheck = `measure_${id}`;
    console.log(meaureToCheck, 'meaureToCheck');
    if (this.state[meaureToCheck] === '2') {
      this.setState({ [id]: value * 1000 });
    } else {
      this.setState({ [id]: value });
    }
  };

  /*form submit button*/
/*idhar call check param and if true returned post req otherwise popup*/
  handleSubmit = e => {
    /* IDHAR CALL KARNA HAI CHECK PARAM AND CHECK IF TRUE POST IT

     have to remove const but post kaise karu when it returns true and buttons ka kaise pass karu in this state?
    Just implement the function with the changes which I proposed I have checked the parameter is being passed to the method
    It should work fine now
     */
    /* This is the new code which i added for the correct calling of the function
    let res;
   res = checkParam(this.state);
   console.log("function was executed");
   */
   const {
    state: { age, spo, heartrate, resrate, drpdownValue, ddimer, cpk, crp, ldh, tropo, ferr, absolute, ctscan, abg }
  } = this;
    try {
      fetch(`${MOCK_SERVICE}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          spo,
          heartrate,
          drpdownValue,
          ddimer,
          cpk,
          crp,
          ldh,
          tropo,
          ferr,
          absolute,
          ctscan,
          abg,
          age,
          resrate
        })
      })
        .then(response => response.json())
        .then(data => {
          this.setState({ responseData: data, modalOpen: true });
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const hidden = this.state.checked ? '' : 'hidden';
    
    const {
      responseData: { message, epicount, vitalcount, labcount },
      modalOpen
    } = this.state;
    return (
      <div className="jupiter">
        {/* &lt; */}
        <title>Risk Calculator</title>
        <div className="full">
          <div className="titlo">
            <h1>RISK CALCULATOR</h1>
          </div>
          <br />
          <br />

          <div className="Image-container container">
            <div className="putto">
              <h4>
                This web based risk calculator estimates the risk of cytokine storm activaton in Covid-19 patients,
                which is based on epidemiological, vital signs and laboratory findings. Ref: 1. Eva W. Cheung at al.
                Multisystem Inflammatory Syndrome Related to COVID-19 in Previously Healthy Children and Adolescents in
                New York City. JAMA. June 08, 2020. doi:10.1001/jama.2020.10374
              </h4>
            </div>
          </div>

          <form onSubmit={this.handleSubmit} className="form">
            <div className="para-container mars">
              <div className="epidem-container col-md-8 col-sm-12 width=50% ">
                <h1 className="head">EPIDEMIOLOGY</h1>

                <div className="yoyo">
                  <Dropdown
                    placeholder="Comorbidities"
                    fluid
                    multiple
                    selection
                    options={options}
                    // onChange={() =>this.handleDropDownChange(e, data, 'drpdownValue')}
                    onChange={this.handleDropDownChange}
                  />
                </div>

                <h1 className="head">VITAL SIGNS</h1>
                <div className="box1">
                  <br />
                  <br />

                  <label className="para_name">
                    RESPIRATORY RATE:
                    <input type="number" id="resrate" required onChange={this.handleChange} />
                  </label>
                  <span className="error" id="srr" color="red">
                    *
                  </span>
                  <br />
                  <br />
                  <label className="para_name">
                    HEART RATE:
                    <input type="number" id="heartrate" required onChange={this.handleChange} />
                    <span className="error" id="shr" color="red">
                      *
                    </span>
                  </label>
                  <br />
                  <br />
                  <label className="para_name">
                    SPO2 :
                    <input type="number" id="spo" required onChange={this.handleChange} />
                    <span className="error" id="sspoe" color="red">
                      *
                    </span>
                  </label>

                  <br></br>
                </div>
                <Checkbox
                  className="ruby"
                  label={{ children: 'LAB READINGS' }}
                  checked={this.state.checked}
                  onChange={this.changeBind}
                />

                <div className={hidden}>
                  <div className="lab">
                    <div>
                      <h1 className="head">LABORATORY FINDINGS</h1>
                      <div className="box2">
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <label className="para_name">
                            DDIMER:
                            <span className="error" id="sage" color="red">
                              *
                            </span>
                          </label>

                          <input
                            className="ind"
                            placeholder="DDIMER"
                            color="red"
                            type="number"
                            id="ddimer"
                            onChange={this.handleLabFindings}
                            required
                          />
                          <select id="measure_ddimer" name="measure" onChange={this.handleChange}>
                            <option value={1}>g/mL</option>
                            <option value={2}>ml/ml</option>
                          </select>
                          <button type="button" class="not_app_dd" id="btn_dd" onclick="NA_DD()">
                            N/A
                          </button>
                        </div>
                        <br />
                        <br />

                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <label className="para_name md-col-4">
                            CPK:
                            <span className="error" id="sage" color="red">
                              *
                            </span>
                          </label>

                          <input className="ind1" type="number" id="cpk" required onChange={this.handleLabFindings} />
                          <select className="md-col-2" id="measure_cpk" name="measure" onChange={this.handleChange}>
                            <option value={1}>U/L</option>
                            <option value={2}>G/L</option>
                          </select>
                          <button type="button" class="not_app_dd" id="btn_cpk" onclick="NA_DD()">
                            N/A
                          </button>
                        </div>
                        <br />
                        <br />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <label className="para_name">
                            CRP:
                            <span className="error" id="sage" color="red">
                              *
                            </span>
                          </label>
                          <input className="ind2" type="number" id="crp" required onChange={this.handleLabFindings} />
                          <select id="measure_crp" name="measure" onChange={this.handleChange}>
                            <option value={1}>mg/L</option>
                            <option value={2}>g/L</option>
                          </select>
                          <button type="button" class="not_app_dd" id="btn_crp" onclick="NA_DD()">
                            N/A
                          </button>
                        </div>
                        <br />
                        <br />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <label className="para_name">
                            LDH:
                            <span className="error" id="sage" color="red">
                              *
                            </span>
                          </label>
                          <input className="ind3" type="number" id="ldh" required onChange={this.handleLabFindings} />
                          <select id="measure_ldh" name="measure" onChange={this.handleChange}>
                            <option value={1}>U/L</option>
                            <option value={2}>g/L</option>
                          </select>
                          <button type="button" class="not_app_dd" id="btn_ldh" onclick="NA_DD()">
                            N/A
                          </button>
                        </div>
                        <br />
                        <br />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <label className="para_name">
                            Troponin:
                            <span className="error" id="sage" color="red">
                              *
                            </span>
                          </label>
                          <input className="ind4" type="number" id="tropo" onChange={this.handleLabFindings} required />
                          <select id="measure_tropo" name="measure" onChange={this.handleChange}>
                            <option value={1}>ng/ml</option>
                            <option value={2}>g/mL</option>
                          </select>
                          <button type="button" class="not_app_dd" id="btn_tropo" onclick="NA_DD()">
                            N/A
                          </button>
                        </div>
                        <br />
                        <br />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <label className="para_name">
                            Ferritin:
                            <span className="error" id="sage" color="red">
                              *
                            </span>
                          </label>
                          <input className="ind5" type="number" id="ferr" onChange={this.handleLabFindings} required />
                          <select id="measure_ferr" name="measure" onChange={this.handleChange}>
                            <option value={1}>g/L</option>
                            <option value={2}>mg/L</option>
                          </select>
                          <button type="button" class="not_app_dd" id="btn_ferr" onclick="NA_DD()">
                            N/A
                          </button>
                        </div>
                        <br />
                        <br />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <label className="para_name md-col-4">
                            Absolute LC:
                            <span className="error" id="sage" color="red">
                              *
                            </span>
                          </label>
                          <input
                            className="ind6"
                            className="md-col-6"
                            type="number"
                            id="absolute"
                            onChange={this.handleLabFindings}
                          />
                          <select className="md-col-2" id="measure_abg" name="measure" onChange={this.handleChange}>
                            <option value={1}>10^-6/L</option>
                            <option value={2}>g/L</option>
                          </select>
                          <button type="button" class="not_app_dd" id="btn_abs" onclick="NA_DD()">
                            N/A
                          </button>
                          <br />
                        </div>
                        <br />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <label className="para_name" style={{ marginRight: '15px' }}>
                            ABG :(P / F)
                          </label>

                          <input className="ind8" type="number" id="abg" onChange={this.handleLabFindings} />
                          <select id="measure_checkAbg" name="measure" onChange={this.handleChange}>
                            <option value={1}>U/L</option>
                            <option value={2}>g/L</option>
                          </select>
                          <button type="button" class="not_app_dd" id="btn_abg" onclick="NA_DD()">
                            N/A
                          </button>
                        </div>

                        <br />
                        <br />

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: '-1%'
                          }}>
                          <label className="para_name">CT SCAN:(corad)</label>
                          <input className="ind7" type="ctscan" id="ctscan" />
                          <select id="measure_ctscan" name="measure" onChange={this.handleChange}>
                            <option value={1}>U/L</option>
                            <option value={2}>g/L</option>
                          </select>
                          <button type="button" class="not_app_dd" id="btn_ctscan" onclick="NA_DD()">
                            N/A
                          </button>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="btype">
              <button className="cbbt" type="button" id="sub" onClick={this.handleSubmit}>
                CALCULATE
              </button>
            </div>
            <br></br>
            <br></br>
          </form>
          <a href="https://forms.gle/3yrDBz4CeLhnW4kX8" target="_blank">
            <marquee behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
              Please help us to contribute more by providing your valuable feedback
            </marquee>
          </a>
          <div className="information container">
            <div className="ptor">
              Moderate and high risk patients require aggressive monitoring of inflammatory milieu or up triaging.
              Anti-inflammatory therapy with steroid and Anticoagulation recommended.{'\n'}*Please note these are mere
              recommendation from the author based on the available scientific recommendation and no means intended to
              replace local guidelines.{'\n'}
              {'\n'}* compulsary{'\n'}
              {'            '}
            </div>
          </div>
          <div className="modahai" id="modahai">
            <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Risk Factor is 7.5 on a scale of 1-10</ModalHeader>
              <ModalBody>
                <div>Epimemiopology: {epicount} Parameters out of Normal Range</div>
                <div>Vital Signs: {vitalcount} Parameters out of Normal Range</div>
                <div>
                  Lab-Findings: {labcount}
                  Parameters out of Normal Range
                </div>
              </ModalBody>
              <ModalFooter>Patient is at {message}</ModalFooter>
            </Modal>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          <fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.google.in"> RISK CALCULATOR</a>
          </fluid>
        </div>
      </div>
    );
  }
}


export default Calculator;
