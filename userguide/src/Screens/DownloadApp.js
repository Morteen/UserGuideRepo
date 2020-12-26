import React from "react";

import { Link } from "react-router-dom";
import GooglePlayIcon from '../Images/downlaodApp/GooglePlayIcon.PNG'
import GooglePlaySearch from '../Images/downlaodApp/GooglePlaySearch.PNG'
import GooglePlayDownload from '../Images/downlaodApp/GooglePlayDownload.PNG'
import InstallApp from '../Images/downlaodApp/InstallApp.PNG'
import OpenApp from '../Images/downlaodApp/OpenApp.PNG'
import AllowAccessOninstall from '../Images/downlaodApp/AllowAccessOninstall.PNG'
import AllowAccessToGoogleEmail from '../Images/downlaodApp/AllowAccessToGoogleEmail.PNG'


function DownloadApp(props) {


 
 
  

  return (
    <ul className="products">
          
    <li className="product" >
      Finn Google Play symbolet på enheten din
      <img src={GooglePlayIcon} alt=" Google Play Icon"  className="product-image"/>
      </li>
    <li className="product" >
     
      Skriv inn Transfleet i søkefeltet 
      <img src={GooglePlaySearch} alt=" Google Play Icon"  className="product-image"/>
      </li>
    <li className="product" >
      Velg Transfleet Terminal
    
      <img src={GooglePlayDownload} alt=" Google Play Icon"  className="product-image"/>
      </li>
      <li className="product" >
      Trykk på Installer
      <img src={InstallApp} alt=" Google Play Icon"  className="product-image"/>
      </li>
      <li className="product">
        Trykk på Åpne
      <img src={OpenApp} alt=" Google Play Icon"  className="product-image"/>
      </li>
      <li className="product">
      Det er viktig å tillate alle valg
      <img src={AllowAccessOninstall} alt=" Google Play Icon"  className="product-image"/>
      </li>
      <li className="product">
     Tillat å bruke email adressen, den blir da registert i Transfleet og kan brukes ved support
      <img src={AllowAccessToGoogleEmail} alt=" Google Play Icon"  className="product-image"/>
      </li>
      
        </ul>
  );
}
export default DownloadApp;
