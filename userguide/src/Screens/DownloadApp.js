import React from "react";

import { Link } from "react-router-dom";
import GooglePlayIcon from '../Images/downlaodApp/GooglePlayIcon.PNG'
import GooglePlaySearch from '../Images/downlaodApp/GooglePlaySearch.PNG'
import GooglePlayDownload from '../Images/downlaodApp/GooglePlayDownload.PNG'


function DownloadApp(props) {


 
 
  

  return (
    <ul className="products">
          
    <li className="product" ><img src={GooglePlayIcon} alt=" Google Play Icon"  className="product-image"/></li>
    <li className="product" ><img src={GooglePlaySearch} alt=" Google Play Icon"  className="product-image"/></li>
    <li className="product" ><img src={GooglePlayDownload} alt=" Google Play Icon"  className="product-image"/></li>
        
        
        </ul>
  );
}
export default DownloadApp;
