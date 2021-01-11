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
        <div className='taskHeading'>Register container </div> 
        <div className='taskExplanation'> Register container benyttes for å registrere container/lastebærer <br></br>

Når en container er laget, den brukes fra andre oppgaver for eksempel Fremplukk <br/>
I dette eksemplet valgte vi Legg til Container og skrev inn containers navn.</div> 
     <ul className="products">
       
        
 
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
