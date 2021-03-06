// import React from 'react';


// export const Footer = () => {
//     return(
//         <div className="footer">
//             <div className="container">
//                 <div className="row justify-content-center">             
//                     <div className="col-auto">                        
//                         <div className="copyright">
//                             <p>© {new Date().getFullYear()} URC Bagdogra</p>
//                         </div>                        
//                     </div>
//                 </div>
//             </div>            
//         </div>
//     );
// };

import '../css/footer.css';
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

 const Footer = () => {
  return (
      <div className="yoyos">
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
     {/* <MDBContainer fluid className="text-center text-md-right">
        <MDBRow>
          
          <MDBCol md="3">
            <h5 className="title">Contact Us</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">+999999999</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">INNOOVATIONCENTER@gmail.com</a>
              </li>
              </ul>
          </MDBCol>
          </MDBRow>
          <MDBRow>
          <MDBCol md="3">
            <h5 className="title">Address</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">MANIPAL</a>
              </li>
              
              </ul>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
  */}
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.google.in"> RISK CALCULATOR</a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
};

export default Footer;