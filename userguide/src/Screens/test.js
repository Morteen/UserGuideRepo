import React from "react";


import DeleteContainer from '../Images/BrdDahl/RegContainer/DeleteContainer.PNG'


function test(props) {


 
 
  

  return (
    
      
       
         <li className="product">
        
        <div className="product-text">{props.cardInfo}</div>
               
            <img src={props.image} alt='Slett container'  className="product-image"></img> 
               

        </li>
       
  );
}
export default test;
