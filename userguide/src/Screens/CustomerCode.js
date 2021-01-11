import React from "react";

import { Link } from "react-router-dom";
import CustomerCodeRecived from '../Images/BrdDahl/CustomerCodeRecived.PNG'
import CustomerCodeScreen from '../Images/downlaodApp/CustomerCode.PNG'
import CustomerCodeScreenWithCode from "../Images/BrdDahl/CustomerCodeScreenWithCode.PNG";
import startIcon from '../Images/StartIcon.PNG'
import locusSymbol from '../Images/LocusSymbol.PNG'
import {CUSTOMERCODE} from '../Constants/CustomerConstants'
import CustomerCodeFail from '../Images/CustomerCodeFail.PNG';
import Networkerror from '../Images/Networkerror.PNG'

function CustomerCode(props) {


 

  

  return (
    <ul className="products">
      <li className="product">
        Ved førstegangs oppstart, eller om man har slettet de registerte opplysningene, trenger man å registrere kundekode. Appen starter automatisk etter nedlasting. Man kan også starte den fra ikonet i menyen
        <img src={startIcon} alt=" Google Play Icon" id='startIconTFTerminal' />
        Hvis man skal endre kundekode fra en eksisterende eller man har kommet til innloggings vinduet, åpnes kundekode feltet ved  å tappe to ganger på Locus ikonet
        <img src={locusSymbol} alt=" Google Play Icon" id='startIconTFTerminal' />
        <div> &nbsp; </div>
        Kundekoden er : {CUSTOMERCODE}
      </li>
          
    <li className="product" >
      Man starter her etter man har installert appen eller man har slettet databasen 
      <div> &nbsp; </div>
     
    <img src={CustomerCodeScreen} alt="Kundekode felt"  className="product-image"/>
    
      </li>
    <li className="product" >
      Legg inn denne koden eller en tildelt av kjøreleder. Bruk pilen oppe til høyre for å gå videre
    <img src={CustomerCodeScreenWithCode} alt="Legg inn kundekode"  className="product-image"/>
       
     
      </li>
    <li className="product" >
    <Link to='/LoginGuide' >
     <div> Når riktig kode er lagt inn kommer du hit. Neste steg er å logge inn</div>
     <div> &nbsp; </div>
    
      <img src={CustomerCodeRecived} alt="Gå til login"  className="product-image"/>
      </Link> 
      </li>

      <li className="product" >
   
     <div> Mulige feilmeldinger</div>
     <div> &nbsp; </div>
    Slå på internett
     <img src={Networkerror} alt="Nettverks feil"  className="product-image"></img>
     <div> &nbsp; </div>
     Legger man inn feil kundekode eller en skrivefeil får man denne feilmeldingen
     <img src = {CustomerCodeFail} alt="Nettverks feil"  className="product-image"/>
      
      </li>
     
      
        </ul>
  );
}
export default CustomerCode;
