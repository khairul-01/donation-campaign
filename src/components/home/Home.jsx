import { useState } from "react";
import Banner from "../banner/Banner";
import Card from "../Card/Card";

const Home = () => {

   const [donationData, setDonationData] = useState([]);

   fetch("./data.json")
   .then(res => res.json())
   .then(data => setDonationData(data))

   return (
      <div>
         <Banner></Banner>
         <div className="grid md:grid-cols-4 gap-5 mt-24 mb-24">
            {
               donationData.map((data, idx) => <Card key={idx} donation={data}></Card>)
            }
         </div>
      </div>
   );
};

export default Home;