import React from "react";


function Card(props) {


 
 
  

  return (
    
      
       
         <li className="product">
        
        <div className="product-text">{props.cardInfo}</div>
      
               
            <img src={props.image} alt={props.imageAlt} className="product-image"></img> 
               

        </li>
       
  );
}
export default Card;
