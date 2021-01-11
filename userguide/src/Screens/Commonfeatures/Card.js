import React from "react";


function Card(props) {


 
 
  

  return (
    
      
       
         <li className="product">

        <img src={props.image} alt={props.imageAlt} className="product-image"></img> 
        
        <div className="product-text">{props.cardInfo}</div>
      
               
         
               

        </li>
       
  );
}
export default Card;
