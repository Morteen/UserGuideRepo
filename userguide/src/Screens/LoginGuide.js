import React from "react";

import { Link } from "react-router-dom";
import LogOn from '../Images/BrdDahl/LogOn/LogOn.PNG'
import LogonwithID from '../Images/BrdDahl/LogOn/LogonwithID.PNG'
import Terminallist from '../Images/BrdDahl/LogOn/Terminallist.PNG'
import ShowAllterminal from '../Images/BrdDahl/LogOn/ShowAllterminal.PNG'
import LoggedOn from '../Images/BrdDahl/LogOn/LoggedOn.PNG'


function LoginGuide(props) {


 
 
  

  return (
    <div>
     <ul className="products">
       <li  className="product">
Pålogging gjennomføres som en veiviser hvor verdiene i hvert steg huskes fra forrige pålogging.  <div> &nbsp; </div>
Trykk på «Logg på»-knappen i bunnen av skjermen for å starte med innlogging av Ansatt-id.  <div> &nbsp; </div>Ved første innlogging blir man møtt av tomt felt. Legg inn ansatt-id der.
</li>
<li  className="product">   Appen husker siste bruker, så hvis det ligger en ansattkode der: Forsikre deg om at den er riktige.

<img src={LogOn} alt='Log on'  className="product-image"></img></li>
<li className="product">
  Gå videre til «Terminal» ved å trykke på pilen i høyre hjørne. <div> &nbsp; </div>
  <img src={LogonwithID} alt='Log on'  className="product-image"></img>
  </li>
  <li className="product">
    Trykk på knappen 'Vis alle terminaler'
    <div> &nbsp; </div><div> &nbsp; </div>
  <img src={ShowAllterminal} alt='Log on'  className="product-image"></img>
  </li>
  <li className="product">
    Velg riktig terminal fra listen og tapp pilen oppe til høyre 2 ganger for å komme til neste steg
    <div> &nbsp; </div>
  <img src={Terminallist} alt='Log on'  className="product-image"></img>
  </li>
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
export default LoginGuide;
