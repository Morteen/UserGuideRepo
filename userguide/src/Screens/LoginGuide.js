import React from "react";

import { Link } from "react-router-dom";
import LogOn from '../Images/BrdDahl/LogOn/LogOn.PNG'
import LogonwithID from '../Images/BrdDahl/LogOn/LogonwithID.PNG'
import Terminallist from '../Images/BrdDahl/LogOn/Terminallist.PNG'
import ShowAllterminal from '../Images/BrdDahl/LogOn/ShowAllterminal.PNG'
import LoggedOn from '../Images/BrdDahl/LogOn/LoggedOn.PNG'
import Card from './Commonfeatures/Card'


function LoginGuide(props) {


 
 
  

  return (
    <div>
      <div className='taskHeading'>Login guide</div> 

      <div className='taskExplanation'> Pålogging gjennomføres som en veiviser hvor verdiene i hvert steg huskes fra forrige pålogging. <br></br> 
      Trykk på «Logg på»-knappen i bunnen av skjermen for å starte med innlogging av Ansatt-id.  <br></br>Ved første innlogging blir man møtt av tomt felt. Legg inn ansatt-id der.

</div> 


     <ul className="products">

       <Card 
       image={LogOn} 
       ImageAlt='Logon' 
       cardInfo='Appen husker siste bruker, så hvis det ligger en ansattkode der: Forsikre deg om at den er riktige.'
       />

<Card 
       image={LogonwithID} 
       ImageAlt='Ansatt nummer' 
       cardInfo='Gå videre til «Terminal» ved å trykke på pilen i høyre hjørne.'
       />

<Card 
       image={ShowAllterminal} 
       ImageAlt='Vi salle terminaler' 
       cardInfo=' Trykk på knappen Vis alle terminaler' 
       />
       
       <Card 
       image={Terminallist} 
       ImageAlt='Vis alle terminaler' 
       cardInfo='   Velg riktig terminal fra listen og tapp pilen oppe til høyre 2 ganger for å komme til neste steg' 
       />
<Link to='/MenuGuide'>
<Card 
       image={LoggedOn} 
       ImageAlt=' Pålogget status vises i bildet' 
       cardInfo=' Pålogget status vises i bildet' 
       />

</Link>
   </ul>
    </div>
  );
}
export default LoginGuide;
