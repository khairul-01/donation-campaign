import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredDonations, saveDonations } from "../utilities/LocalStorage";
import { useEffect, useState } from "react";

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

   
   const handleDonate = () => {
      const donations = getStoredDonations();
      const exist = donations.find(donation => donation === idInt);
      if(!exist){
         saveDonations(idInt);
         toast('Congratulations! You have donated successfully');
      }
      else{
         toast('You have already donated')
      }
   }

   return (
      <div className="space-y-7">
         <div className="relative">
            <img className="w-full rounded-lg " src={`${picture}`} alt="" />
            <div className="absolute bg-neutral-900 mix-blend-overlay h-40 bottom-0 w-full">
            </div>
            <button onClick={handleDonate} style={btnColor} className="btn ml-16 absolute bottom-14">Donate ${price}</button>
         </div>
         <h1 className="text-4xl font-bold">{title}</h1>
         <p>{description}</p>
         <ToastContainer/>
      </div>
   );
};

export default DonationDetails;