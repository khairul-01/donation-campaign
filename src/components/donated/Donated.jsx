import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Donated = ({donation}) => {

   const { picture, title, category, categoryBackground, cardBackgroundColor, textAndButtonBackgroundColor, description, price, id } = donation;
   
   const customStyle = {
      backgroundColor: `${cardBackgroundColor}`,
      color: `${textAndButtonBackgroundColor}`
   }
   const bgCatergory = {
      backgroundColor: `${categoryBackground}`
   }
   const btnColor = {
      backgroundColor: `${textAndButtonBackgroundColor}`,
      color: 'white'
   }

   return (
      <div>
         <div style={customStyle} className="card card-compact shadow-xl flex-row gap-5">
            <div className="w-1/3">
               <figure><img className="w-full" src={picture} alt="Shoes" /></figure>
            </div>
            <div className="flex flex-col justify-center">
               <p><span style={bgCatergory} className="px-4 py-1 rounded-md">{category}</span></p>
               <h2 className="card-title">{title}</h2>
               <p className="font-semibold">${price}.00</p>

               <Link to={`/${id}`}><button style={btnColor} className="btn">View Details</button></Link>
            </div>
         </div>
      </div>
   );
};

export default Donated;