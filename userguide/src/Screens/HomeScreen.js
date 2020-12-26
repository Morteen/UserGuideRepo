import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import GooglePlaySearch from '../Images/downlaodApp/GooglePlaySearch.PNG'


function HomeScreen(props) {


 
 
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  

  return (
    <div>
     
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
                <Link to='/CustomerCode'>Kundekode</Link>
              </div>
              <div className="product-brand">mm</div>
              <div className="product-price">mm</div>
              <div className="product-rating">
              
              </div>
            </li>
            <li>
            <div className="product-name"    onClick={closeMenu}>
                <Link to='/LoginGuide' >Login Guide</Link>
              </div>
              <div className="product-brand">mm</div>
              <div className="product-price">mm</div>
              <div className="product-rating">
              
              </div>

            </li>
         </ul>
   
    </div>
  );
}
export default HomeScreen;
