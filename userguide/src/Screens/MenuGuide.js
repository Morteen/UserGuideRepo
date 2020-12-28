import React from "react";

import { Link } from "react-router-dom";

import LoggedOn from '../Images/BrdDahl/LogOn/LoggedOn.PNG'


function MenuGuide(props) {


 
 
  

  return (
    <div>
     <ul className="products">
       
  <li className="product">
   Pålogget status vises i bildet 
   <Link to='/'>Trykk på Meny knappen for å åpne funksjons menyen</Link>
    <div> &nbsp; </div>
  <img src={LoggedOn} alt='Log on'  className="product-image"></img>
  </li>
   </ul>
    </div>
  );
}
export default MenuGuide;
