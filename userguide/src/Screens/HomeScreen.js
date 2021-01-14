import React from "react";

import { Link } from "react-router-dom";
import GooglePlaySearch from '../Images/downlaodApp/GooglePlaySearch.PNG'
import CustomerCodeScreen from '../Images/downlaodApp/CustomerCode.PNG'

import LogOn from '../Images/BrdDahl/LogOn/LogOn.PNG'
import Menu from '../Images/BrdDahl/Menu/BDProdfunctionList.PNG'



function HomeScreen(props) {


 
 
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  

  return (
   
     
        <ul className="products">
          
            <li className="product" >
            

              <div className="product-name"   onClick={closeMenu}>
                <Link to='/DownloadApp' ><div> Hvordan laste ned TransFleet Terminal fra Google Play</div>
                <img src={GooglePlaySearch} alt=" Google Play Icon"  className="product-image"/>
                </Link>
              </div>
             
              
            

            </li>
            <li>
            <div className="product-name"  onClick={closeMenu}>
                <Link to='/CustomerCode'><div> Kundekode </div>
                <div> &nbsp; </div>
                <img src={CustomerCodeScreen} alt="Google Play Icon"  className="product-image"/>
                </Link>
             
              
              
              </div>
            </li>
            <li>
            <div className="product-name"    onClick={closeMenu}>
                <Link to='/LoginGuide' ><div>Login Guide</div>
                <div> &nbsp; </div>
                <img src={LogOn} alt=" Google Play Icon"  className="product-image"/>
                </Link>
         
             
              
              </div>

            </li>
            <li>
            <div className="product-name"    onClick={closeMenu}>
                <Link to='/MenuGuide' ><div>Meny </div>
                <div> &nbsp; </div>
                <img src={Menu} alt=" Google Play Icon"  className="product-image"/>
                </Link>
         
             
              
              </div>

            </li>
         </ul>

  );
}
export default HomeScreen;
