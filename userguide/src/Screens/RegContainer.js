import React from "react";

import { Link } from "react-router-dom";

import LoggedOn from '../Images/BrdDahl/LogOn/LoggedOn.PNG'
import Menu from '../Images/BrdDahl/Menu/BDProdfunctionList.PNG'
import RegContainerIcon from '../Images/Tasks/NewContainer/RegContainerIcon.PNG'
import RegContainerSelected from '../Images/Tasks/NewContainer/RegContainerSelected.PNG'
import EmptyContainer from '../Images/BrdDahl/RegContainer/EmptyContainer.PNG'
import NewContainer from '../Images/BrdDahl/RegContainer/NewContainer.PNG'
import DeleteContainer from '../Images/BrdDahl/RegContainer/DeleteContainer.PNG'

import Card from './Commonfeatures/Card'


function RegContainer(props) {


 
 
  

  return (
    <div>
        <div className='taskHeading'><h3>Register container</h3></div>  
     <ul className="products">
       
         <li className="product">
            Register container benyttes for å registrere container/lastebærer <div></div>

                
                <div></div> Når en container er laget, den brukes fra andre oppgaver for eksempel Fremplukk 
                I dette eksemplet valgte vi Legg til Container og skrev inn containers navn.

        </li>
        <li className="product">
             Velg Register container fra listen
             <div> &nbsp; </div><div> &nbsp; </div>
    
            <img src={RegContainerSelected} alt='Velg Registrer kontainer'  className="product-image"></img>
  </li>
 
<Card 
image={RegContainerSelected} 
ImageAlt='Velg Registrer kontainer' 
cardInfo=' Velg Register container fra listen  '

/>
<Card image={EmptyContainer}ImageAlt='Register container ikon'  cardInfo='  Her kan ny container registreres, eller en eksisterende container kan velges fra listen'/>
<Card image={NewContainer} ImageAlt='Ny  kontainer'  cardInfo='  Hvis det skal legges til en ny, så taster man inn PostNord containernummer eller lager en beskrivelse av aktuell PostNord bil. Containeren lagres ved å trykke ’Enter’ på tastaturet.'/>
<Card image={DeleteContainer} ImageAlt='Slett  kontainer' cardInfo='Containeren kan slettes ved å bruke søppelkasse symbolet oppe til høyre'/>
   </ul>
    </div>
  );
}
export default RegContainer;
