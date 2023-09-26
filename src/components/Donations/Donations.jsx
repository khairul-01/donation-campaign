import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../utilities/LocalStorage";

const Donations = () => {

   const [donationData, setDonationData] = useState([]);

   const data = useLoaderData();

   useEffect(()=>{
      const storedDonations = getStoredDonations();

      if(data.length > 0) {
         const gotDonations = data.filter(donate => storedDonations.includes(donate.id));
         setDonationData(storedDonations);
      }
   },[])

   return (
      <div>
         <h2>from donations: {data.length}</h2>
      </div>
   );
};

export default Donations;