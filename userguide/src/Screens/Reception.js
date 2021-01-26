import React from "react";
import Card from './Commonfeatures/Card'
import MediumCard from './Commonfeatures/MediumCard'
import Mottak from '../Images/Tasks/Recive/Mottak.PNG'
import MottakStartImage from '../Images/Tasks/Recive/MottakStartImage.PNG'
import MottakWithInfo from '../Images/Tasks/Recive/MottakWithInfo.PNG'
import CheckFunction from '../Images/Tasks/Recive/CheckFunction.PNG'
import Check from '../Images/Check.PNG'



function Reception(props) {


 
 
  

  return (
    <div>
        <div className='taskHeading'><h3>Mottak</h3></div>  
        <div className='taskExplanation'> Mottak <div className ='alertText'> (denne funksjoner er for øyeblikket ikke aktivert)</div> benyttes av distribunaler for å registrere mottak av kolli og oppdatere statusen i TransFleet til Levert (Distribunal). 
</div> 

     <ul className="products">


<Card 
image={Mottak} 
ImageAlt='Mottak' 
cardInfo='Velg "Mottak" fra oppgave listen.'
/>
<Card 
image={MottakStartImage} 
ImageAlt='Mottak start bilde' 
cardInfo='Bilde viser startbilde for Mottak delen'
/>
<Card 
image={MottakWithInfo} 
ImageAlt='Mottaks bilde med informasjon' 
cardInfo='Her kan kolli skannes fortløpende, og både kollinummer, avsender, turinformasjon, og INNE/UTE referansen vises i bildet.'
/>
< MediumCard
image1={CheckFunction}
image2={Check}
cardInfo1='Når alle kolli er levert, kan brukeren sjekke om det stemmer mot TransFleet ved å trykke Sjekk ikonet Dette bekrefter om kolliet er skannet og om det er ute eller inne.' 
cardInfo2=''
/>

 

 
   </ul>
    </div>
  );
}
export default Reception;
