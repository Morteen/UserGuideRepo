import React from "react";

import { Link } from "react-router-dom";
import Card from './Commonfeatures/Card'
import LoggedOn from '../Images/BrdDahl/LogOn/LoggedOn.PNG'
import Menu from '../Images/BrdDahl/Menu/BDProdfunctionList.PNG'
import RegContainerOrUseExisting from '../Images/Tasks/Fremplukk/RegContainerOrUseExisting.PNG'
import GetTripFromColli from '../Images/Tasks/Fremplukk/GetTripFromColli.PNG'
import ConfirmTripFremplukk from '../Images/Tasks/Fremplukk/ConfirmTripFremplukk.PNG'


function LoadContainer(props) {


 
 
  

  return (
    <div>
        <div className='taskHeading'><h3>Fremplukk</h3></div>  
     <ul className="products">


<Card 
image={Menu} 
ImageAlt=' Velg "Fremplukk" i listen' 
cardInfo='  Velg "Fremplukk" i listen'
/>

   
<Card 
image={RegContainerOrUseExisting} 
ImageAlt='Register en ny container eller bru en eksisterende' 
cardInfo='Her kan man velge å bruke en tidligere registret container eller lage en ny. Velg pilen opp til høyre for å gå til neste steg.'
/> 

<Card 
image={GetTripFromColli} 
ImageAlt='Skann eller tast inn nummer på valgte kolli. ' 
cardInfo='Skann eller tast inn nummer på valgte kolli. '
/>   
<Card 
image={ConfirmTripFremplukk} 
ImageAlt='Hvis ruten som vises er den som skal lastes, trykker brukeren Ja knappen, og blir sendt til neste bilde.' 
cardInfo='Hvis ruten som vises er den som skal lastes, trykker brukeren Ja knappen, og blir sendt til neste bilde.'
/>  

 
 
   </ul>
    </div>
  );
}
export default LoadContainer;
