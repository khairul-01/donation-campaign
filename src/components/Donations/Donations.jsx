import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../utilities/LocalStorage";
import Donated from "../donated/Donated";

const Donations = () => {

   const [donationData, setDonationData] = useState([]);
   const [dataLength, setDatalength] = useState(4);

   const data = useLoaderData();

   useEffect(()=>{
      const storedDonations = getStoredDonations();

      if(data.length > 0) {
         const gotDonations = data.filter(donate => storedDonations.includes(donate.id));
         setDonationData(gotDonations);
      }
   },[])

   return (
      <div>
         <div className="grid grid-cols-2 gap-7">
            {
               donationData.slice(0, dataLength).map((donated, idx)=><Donated key={idx} donation={donated}></Donated>)
            }
         </div>
         <div className={`flex justify-center mt-10 ${(donationData.length<=4 || donationData.length===dataLength) && 'hidden'}`}>
            <button onClick={()=>setDatalength(donationData.length)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-accent">See All</button>
         </div>
      </div>
   );
};

export default Donations;