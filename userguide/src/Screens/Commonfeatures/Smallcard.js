import React from "react";


function Smallcard(props) {


 
 
  

  return (
    
      
       
         <li className="product">

        <img src={props.image} alt={props.imageAlt} className="small-product-image"></img> 
        
        <div className="product-text">{props.cardInfo}</div>
      
               
         
        {props.ekstraInfo}

        </li>
  
      
       
  );
}
export default Smallcard;
