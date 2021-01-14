import React from "react";

import { Link } from "react-router-dom";
import CustomerCodeRecived from '../Images/BrdDahl/CustomerCodeRecived.PNG'
import CustomerCodeScreen from '../Images/downlaodApp/CustomerCode.PNG'
import CustomerCodeScreenWithCode from "../Images/BrdDahl/CustomerCodeScreenWithCode.PNG";
import startIcon from '../Images/StartIcon.PNG'
import locusSymbol from '../Images/LocusSymbol.PNG'
import {CUSTOMERCODE} from '../Constants/CustomerConstants'
import CustomerCodeFail from '../Images/CustomerCodeFail.PNG';
import Networkerror from '../Images/Networkerror.PNG'
import Card from './Commonfeatures/Card'
import Smallcard from './Commonfeatures/Smallcard'
import MediumCard from './Commonfeatures/MediumCard'

function CustomerCode(props) {


 

  let tekst = 'Kundekoden er :'+ CUSTOMERCODE

  return (
    <div>

    <div className='taskHeading'>Kundekode guide</div> 

      <div className='taskExplanation'> Dette er en veiviser om hvordan bruke kundekode. Kundekoden brukes<br/>
       til å hente riktige instillinger til appen tilpasset. Disse instilllingen sørger for at app funksjonene virker <br/> på riktig måte og ansatt id blir godkjent mot riktig database

</div> 
    <ul className="products">

< MediumCard 
     image1={startIcon}
     image2={locusSymbol}
     imageAlt1='Ved førstegangs oppstart, eller om man har slettet de registerte opplysningene, trenger man å registrere kundekode. Appen starter automatisk etter nedlasting. Man kan også starte den fra ikonet i menyen' 
     imageAlt2='Man starter her etter man har installert appen eller man har slettet databasen ' 
     cardInfo1= 'Ved førstegangs oppstart, eller om man har slettet de registerte opplysningene, trenger man å registrere kundekode. Appen starter automatisk etter nedlasting. Man kan også starte den fra ikonet i menyen'
     cardInfo2= 'Hvis man skal endre kundekode fra en eksisterende eller man har kommet til innloggings vinduet, åpnes kundekode feltet ved  å tappe to ganger på Locus ikonet'
     ekstraInfo ={tekst}
     />


      



      
      <Card
      image={CustomerCodeScreen} 
      ImageAlt='   Man starter her etter man har installert appen eller man har slettet databasen ' 
      cardInfo='   Man starter her etter man har installert appen eller man har slettet databasen ' 
      />

<Card
      image={CustomerCodeScreenWithCode} 
      ImageAlt='Legg inn denne koden eller en tildelt av kjøreleder. Bruk pilen oppe til høyre for å gå videre' 
      cardInfo='Legg inn denne koden eller en tildelt av kjøreleder. Bruk pilen oppe til høyre for å gå videre' 
      />
          
          <Link to='/LoginGuide' >
          <Card
      image={CustomerCodeRecived} 
      ImageAlt=' Når riktig kode er lagt inn kommer du hit. Neste steg er å logge inn' 
      cardInfo=' Når riktig kode er lagt inn kommer du hit.'
      />
          </Link> 
   
    

     
     < MediumCard 
     image1={Networkerror}
     image2={CustomerCodeFail}
     imageAlt1='Networkerror'
     imageAlt2='Feil med kundekoden'
     cardInfo1= 'Slå på internett'
     cardInfo2= '  Legger man inn feil kundekode eller en skrivefeil får man denne feilmeldingen'
     />
    
      
     
     
      
        </ul>
        </div>
  );
}
export default CustomerCode;
