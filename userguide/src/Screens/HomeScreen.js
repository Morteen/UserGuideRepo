import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";


function HomeScreen(props) {


 
 
  

  return (
    <div>
     
        <ul className="products">
          
            <li className="product" >
            

              <div className="product-name">
                <Link to='/DownloadApp' >Last ned fra Google Play</Link>
              </div>
              <div className="product-brand">mm</div>
              <div className="product-price">mm</div>
              <div className="product-rating">
              
              </div>

            </li>
            <li>
            <div className="product-name">
                <Link to='/CustomerCode'>Kundekode</Link>
              </div>
              <div className="product-brand">mm</div>
              <div className="product-price">mm</div>
              <div className="product-rating">
              
              </div>
            </li>
            <li>
            <div className="product-name">
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
