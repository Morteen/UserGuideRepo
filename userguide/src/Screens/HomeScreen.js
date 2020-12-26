import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import GooglePlaySearch from '../Images/downlaodApp/GooglePlaySearch.PNG'
import CustomerCodeScreen from '../Images/downlaodApp/CustomerCode.PNG'
import CustomerCodeScreenWithCode from "../Images/BrdDahl/CustomerCodeScreenWithCode.PNG";


function HomeScreen(props) {


 
 
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  

  return (
   
     
        <ul className="products">
          
            <li className="product" >
            

              <div className="product-name"   onClick={closeMenu}>
                <Link to='/DownloadApp' ><div> Hvordan laste ned Transfleet Terminal fra Google Play</div>
                <img src={GooglePlaySearch} alt=" Google Play Icon"  className="product-image"/>
                </Link>
              </div>
             
              
            

            </li>
            <li>
            <div className="product-name"  onClick={closeMenu}>
                <Link to='/CustomerCode'><div> Kundekode </div>
                <div> &nbsp; </div>
                <img src={CustomerCodeScreen} alt=" Google Play Icon"  className="product-image"/>
                </Link>
             
              
              
              </div>
            </li>
            <li>
            <div className="product-name"    onClick={closeMenu}>
                <Link to='/LoginGuide' >Login Guide
                <img src={CustomerCodeScreenWithCode} alt=" Google Play Icon"  className="product-image"/>
                </Link>
         
             
              
              </div>

            </li>
         </ul>

  );
}
export default HomeScreen;
