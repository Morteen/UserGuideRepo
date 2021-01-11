import React from "react";

import { Link } from "react-router-dom";
import GooglePlayIcon from '../Images/downlaodApp/GooglePlayIcon.PNG'
import GooglePlaySearch from '../Images/downlaodApp/GooglePlaySearch.PNG'
import GooglePlayDownload from '../Images/downlaodApp/GooglePlayDownload.PNG'
import InstallApp from '../Images/downlaodApp/InstallApp.PNG'
import OpenApp from '../Images/downlaodApp/OpenApp.PNG'
import AllowAccessOninstall from '../Images/downlaodApp/AllowAccessOninstall.PNG'
import AllowAccessToGoogleEmail from '../Images/downlaodApp/AllowAccessToGoogleEmail.PNG'
import CustomerCodeScreen from '../Images/downlaodApp/CustomerCode.PNG'
import Card from './Commonfeatures/Card'


function DownloadApp(props) {


 
 
  

  return (
    <div>
       <div className='taskHeading'>Download</div> 
        <div className='taskExplanation'> Dette er en steg for steg veiviser for nedlasting av appen <br></br>

.</div> 
    <ul className="products">
       
<Card 
image={GooglePlayIcon} 
ImageAlt=' Finn Google Play symbolet på enheten din' 
cardInfo=' Finn Google Play symbolet på enheten din'

/>
<Card 
image={GooglePlaySearch} 
ImageAlt='  Skriv inn TransFleet i søkefeltet ' 
cardInfo='  Skriv inn TransFleet i søkefeltet '

/>

<Card 
image={GooglePlayDownload} 
ImageAlt='   Velg TransFleet Terminal' 
cardInfo='  Velg TransFleet Terminal'

/>
<Card 
image={InstallApp} 
ImageAlt='Trykk på Installer' 
cardInfo='Trykk på "Installer" for å installere appen'

/>
<Card 
image={OpenApp} 
ImageAlt='Åpne appen' 
cardInfo='Trykk "Åpne for å starte appen for første gang'

/>


<Card 
image={AllowAccessOninstall} 
ImageAlt= 'Det er viktig å tillate alle valg' 
cardInfo='  Det er viktig å tillate alle valg'

/>
<Card 
image={AllowAccessToGoogleEmail} 
ImageAlt= 'Tillat å bruke email adressen, den blir da registert i TransFleet og kan brukes ved support' 
cardInfo=' Tillat å bruke email adressen, den blir da registert i TransFleet og kan brukes ved support'

/>
    
<Link to='/CustomerCode'>
<Card 
image={CustomerCodeScreen} 
ImageAlt= 'Hvordan legge inn kundekode finner du her!' 
cardInfo=' Hvordan legge inn kundekode finner du her!'

/>

</Link>
   
    
   
      
     
    
     
      
      
        </ul>
        </div>
  );
}
export default DownloadApp;
