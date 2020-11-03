// import React, { Component } from 'react';
// import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody,
//     Form, FormGroup, Input, Label } from 'reactstrap';
// import { NavLink, Link } from 'react-router-dom';
// import "../css/navbar.css";
// class Header extends Component {
//     constructor(props) {
//         super(props);
    
//         this.toggleNav = this.toggleNav.bind(this);
        

//         this.state = {
//             isNavOpen: true,
           
//         };
//     }

//     toggleNav() {
//         this.setState({
//         isNavOpen: !this.state.isNavOpen
//       });
//     }

   

//     render() {
//         return(
//             <React.Fragment>
//                 <Navbar dark expand="md" background-color=" #232f3e">
//                     <div className="container">
//                         {/* <NavbarToggler onClick={this.toggleNav} /> */}
//                         <NavbarBrand className="mr-auto" href="/">RISK CALCULATOR     </NavbarBrand>
//                         <Collapse isOpen={this.state.isNavOpen} navbar>
//                         <Nav navbar>
//                             <NavItem>
//                                 <Link className="nav-link" to="/about">
//                                     <span className="fa fa-home"></span> Home
//                                 </Link>
//                             </NavItem>
//                             <NavItem>
//                                 <Link className="nav-link" to="/aboutus">
//                                     <span className="fa fa-info"></span>TEAM
//                                 </Link>
//                             </NavItem>
//                             <NavItem>
//                                 <Link className="nav-link" to="/CALCULATOR">
//                                     <span className="fa fa-list"></span> CALCULATOR
//                                 </Link>
//                             </NavItem>
//                             <NavItem>
//                                 <Link className="nav-link" to="/certification">
//                                     <span className="fa fa-address-card"></span> APPRICIATION
//                                 </Link>
//                             </NavItem>
//                         </Nav>                       
//                         </Collapse>
//                     </div>
//                 </Navbar>
//             </React.Fragment>
//         );
//     }
// }

// export default Header;

import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/navbar.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse} from 'reactstrap';

const Header=()=> {

    const [panel, setPanel] = useState(false);
    const history=useHistory()

    function toggleNav () {
        if(!panel) setPanel(true);
        else setPanel(false);
    }

    function toggleFalse () {
        setPanel(false);
    }

    return (
        <React.Fragment>
            <Navbar dark expand="md" >
                <div className="container navbar"> 
                    <NavbarToggler onClick={toggleNav} />             
                    <NavbarBrand className="mr-auto" href="/"><div className="home-title">RISK CALCULATOR</div></NavbarBrand> 
                    <Collapse isOpen={panel} navbar>                            
                    <Nav navbar>
                        <NavItem className='rout' key="1" onClick={toggleFalse}>
                            <Link className="nav-link" to="/HOME">
                                <span className="fa fa-home fa-lg"> Home</span> 
                            </Link>
                        </NavItem>  
                        {/*
                        <NavItem className='rout' key="1" onClick={toggleFalse}>
                            <Link className="nav-link" to="/LOGIN">
                                <span className="fa fa-sign-in"> LOGIN</span> 
                            </Link>
                        </NavItem>    
                        */}   
                        <NavItem className='rout' key="4" onClick={toggleFalse}>
                            <Link className="nav-link" to="/LOGIN">
                                <span className="fa fa-calculator"> CALCULATOR </span> 
                            </Link>
                        </NavItem>           
                        <NavItem className='rout' key="3" onClick={toggleFalse}>
                            <Link className="nav-link" to="/TEAM" color="grey">
                                <span className="fa fa-users"> TEAM</span> 
                            </Link>
                        </NavItem>
                        
                        <NavItem className='rout' key="2" onClick={toggleFalse}>
                            <Link className="nav-link" to="/APPRAISAL">
                                <span className="fa fa-gift"> APPRICIATION</span>
                            </Link>
                        </NavItem>
                    </Nav> 
                    </Collapse>
                </div>
            </Navbar>
        </React.Fragment>      
    );
}
  
export default Header;
