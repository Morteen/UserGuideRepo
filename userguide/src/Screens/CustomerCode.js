import React from "react";

import { Link } from "react-router-dom";
import CustomerCodeRecived from '../Images/BrdDahl/CustomerCodeRecived.PNG'
import CustomerCodeScreen from '../Images/downlaodApp/CustomerCode.PNG'
import CustomerCodeScreenWithCode from "../Images/BrdDahl/CustomerCodeScreenWithCode.PNG";

function CustomerCode(props) {


 
 
  

  return (
    <ul className="products">
          
    <li className="product" >
      Man starter her etter man har installert appen. 
      <div> &nbsp; </div>
      <div> &nbsp; </div>
    <img src={CustomerCodeScreen} alt=" Google Play Icon"  className="product-image"/>
    
      </li>
    <li className="product" >
      Legg inn denne koden eller en tildelt av kjøreleder. Bruk pilen oppe til høyre for å gå videre
    <img src={CustomerCodeScreenWithCode} alt=" Google Play Icon"  className="product-image"/>
       
     
      </li>
    <li className="product" >
    <Link to='/LoginGuide' >
     <div> Når riktig kode er lagt inn kommer du hit. Neste steg er å logge inn</div>
     <div> &nbsp; </div>
    
      <img src={CustomerCodeRecived} alt=" Google Play Icon"  className="product-image"/>
      </Link> 
      </li>
     
      
        </ul>
  );
}
export default CustomerCode;
