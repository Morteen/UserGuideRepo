import React from "react";

import { Link } from "react-router-dom";
import Card from './Commonfeatures/Card'
import LoggedOn from '../Images/BrdDahl/LogOn/LoggedOn.PNG'
import Menu from '../Images/BrdDahl/Menu/BDProdfunctionList.PNG'


function MenuGuide(props) {


 
 
  

  return (
    <div>
        <div className='taskHeading'><h3>Oppgavemeny oversikt</h3></div>  
     <ul className="products">
         <Card
         image={LoggedOn} 
         ImageAlt='Pålogget status vises i bildet ' 
         cardInfo='Pålogget status vises i bildet Trykk på Meny knappen for å åpne funksjons menyen '
         />

<Card
         image={Menu} 
         ImageAlt='Velg ønsket oppgave fra listen' 
         cardInfo='Velg ønsket oppgave fra listen'
         />
       
 
  
   </ul>
    </div>
  );
}
export default MenuGuide;
