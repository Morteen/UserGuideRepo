import React from "react";


function MediumCard(props) {


 
 
  

  return (
    
      
       
         <li className="product">
 <div className ='product-medium'>
 <img src={props.image1} alt={props.imageAlt1} className="medium-product-image"></img> 
 <div className="medium-product-text">{props.cardInfo1}</div>
 </div>
 <div className ='product-medium'>

 <img src={props.image2} alt={props.imageAlt2} className="medium-product-image"></img> 
        
        <div className="medium-product-text">{props.cardInfo2}</div>


 </div>

    
    {props.ekstraInfo} 
               
         
      

        </li>
  
      
       
  );
}
export default MediumCard;
