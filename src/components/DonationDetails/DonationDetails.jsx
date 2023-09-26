import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {

   const data = useLoaderData();
   const {id} = useParams();
   const idInt = parseInt(id);
   const donationData = data.find(donation => donation.id === idInt);
   const {picture, title, description, price, textAndButtonBackgroundColor} = donationData;
   const btnColor = {
      backgroundColor: `${textAndButtonBackgroundColor}`,
      color: 'white'
   }
   
   const handleDonate = () {
      
   }

   return (
      <div className="space-y-7">
         <div className="relative">
            <img className="w-full rounded-lg" src={`${picture}`} alt="" />
            <div className="absolute bg-neutral-900 mix-blend-overlay h-40 bottom-0 w-full">
               <button onClick={handleDonate} style={btnColor} className="btn m-10 ml-2">Donate ${price}</button>
            </div>
         </div>
         <h1 className="text-4xl font-bold">{title}</h1>
         <p>{description}</p>
      </div>
   );
};

export default DonationDetails;