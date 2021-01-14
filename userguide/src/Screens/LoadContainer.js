import React from "react";

import { Link } from "react-router-dom";
import Card from './Commonfeatures/Card'
import MediumCard from './Commonfeatures/MediumCard'
import LoggedOn from '../Images/BrdDahl/LogOn/LoggedOn.PNG'
import Menu from '../Images/BrdDahl/Menu/BDProdfunctionList.PNG'
import RegContainerOrUseExisting from '../Images/Tasks/Fremplukk/RegContainerOrUseExisting.PNG'
import GetTripFromColli from '../Images/Tasks/Fremplukk/GetTripFromColli.PNG'
import ConfirmTripFremplukk from '../Images/Tasks/Fremplukk/ConfirmTripFremplukk.PNG'
import Refernces from '../Images/Tasks/Fremplukk/Refernces.PNG';
import UnknownColli from '../Images/Tasks/Fremplukk/UnknownColli.PNG'
import CheckFremplukk from '../Images/Tasks/Fremplukk/CheckFremplukk.PNG'
 import GetColliInfo from '../Images/Tasks/Fremplukk/GetColliInfo.PNG'
 import ArticleInfo from '../Images/Tasks/Fremplukk/ArticleInfo.PNG'
 import DP_ArticleInfo from '../Images/Tasks/Fremplukk/DP_ArticleInfo.PNG'


function LoadContainer(props) {


 
 
  

  return (
    <div>
        <div className='taskHeading'><h3>Fremplukk</h3></div>  
        <div className='taskExplanation'> Dette er en veiviser om hvordan bruke funksjonen fremplukk<br/>
       Denne funksjonen brukes på terminal for å laste ordre på bilen og gi orderen<br/> Laste(Opplastet distrubisjons bil) og registert turnavn i Transfleet.<br/>
       Kolliet som blir skannet får også skannetflagg og navnet på containeren registert i TransFleet

</div> 

     <ul className="products">


<Card 
image={Menu} 
ImageAlt='Velg "Fremplukk" i listen' 
cardInfo='Velg "Fremplukk" i listen'
/>

   
<Card 
image={RegContainerOrUseExisting} 
ImageAlt='Register en ny container eller bruk en eksisterende' 
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
<Card 
image={ Refernces} 
ImageAlt='Herfra kan skanningen fortsette fortløpende til man er ferdig.' 
cardInfo='Herfra kan skanningen fortsette fortløpende til man er ferdig.'
/>

<MediumCard 
image1={ ArticleInfo} 
ImageAlt1='Sjekk fremplukk.' 
cardInfo1='Når alle kolli er lastet for ruten, kan brukeren sjekke om det stemmer mot TransFleet ved å trykke Sjekk. Nå kontrolleres det hvilke kolli som er skannet ok:  Hvis ingen referanser velges kan ikke kontroll funksjonen brukes og man får en feilmelding.'
/>
<li>
Dersom Referanse er valgt til INNE vises antall skannet av totalt antall INNE kolli, samt INNE kolli som ikke er skannet i en liste. <br/> <br/>
Dersom Referanse er valgt til UTE vises antall skannet av totalt antall UTE kolli samt UTE kolli som ikke er skannet i en liste. <br/> <br/>
Dersom Alle referanser er valgt vises antall skannet av totalt antall skannet samt UTE og INNE kolli som ikke er skannet i en liste. 
</li>

<Card 
image={GetColliInfo} 
ImageAlt='Tapp på et kollinummer' 
cardInfo='Tapp på et kollinummer for å få vist varebeskrivelse for kolliet.'
/>


<MediumCard 
image1={ArticleInfo} 
ImageAlt1='Artikel info' 
cardInfo1='Her skal innholdet \ varedata knyttet til kolli vises. Dette vil gjelde fra versjon 1.3 av APP.'
/>
 
<MediumCard 
image1={DP_ArticleInfo} 
ImageAlt1='DP artikel info' 
cardInfo1='Dersom det gjelder et DP kolli vil varebeskrivelse vises som:  DP pakke Antall pakker i DP: NN'
/>
 
   </ul>
    </div>
  );
}
export default LoadContainer;
