import { Link } from "react-router-dom";
import DonationDetails from "../DonationDetails/DonationDetails";

const Card = ({ donation }) => {
   const { picture, title, category, categoryBackground, cardBackgroundColor, textAndButtonBackgroundColor, description, price, id } = donation;
   
   const customStyle = {
      backgroundColor: `${cardBackgroundColor}`,
      color: `${textAndButtonBackgroundColor}`
   }
   const bgCatergory = {
      backgroundColor: `${categoryBackground}`
   }


   return (
      <Link to={`/${id}`}>
         <div style={customStyle} className={`card card-compact shadow-xl`}>
            <figure><img className="w-full" src={picture} alt="Shoes" /></figure>
            <div className="card-body">
               <p><span style={bgCatergory} className="px-4 py-1 rounded-md">{category}</span></p>
               <h2 className="card-title">{title}</h2>
            </div>
         </div>
      </Link>
   );
};

export default Card;