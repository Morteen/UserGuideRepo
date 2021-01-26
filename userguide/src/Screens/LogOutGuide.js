import React from "react";

import { Link } from "react-router-dom";
import LogOn from '../Images/BrdDahl/LogOn/LogOn.PNG'
import Card from './Commonfeatures/Card'


function LogOutGuide(props) {


 
 
  

  return (
    <div>
      <div className='taskHeading'>Log ut guide</div> 

    


     <ul className="products">

       <Card 
       image={LogOn} 
       ImageAlt='Logon' 
       cardInfo='Appen husker siste bruker, så hvis det ligger en ansattkode der: Forsikre deg om at den er riktige.'
       />


   </ul>
    </div>
  );
}
export default LogOutGuide;
