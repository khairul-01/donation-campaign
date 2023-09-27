import { useState } from "react";
import Banner from "../banner/Banner";
import Card from "../Card/Card";

const Home = () => {

   const [donationData, setDonationData] = useState([]);
   
   fetch("./data.json")
   .then(res => res.json())
   .then(data => setDonationData(data))

   const handleSubmit = e => {
      e.preventDefault();
      console.log(typeof e.target.search.value);
      console.log(typeof donationData[0].category);
      const searchedValue = e.target.search.value;

      // const display = donationData.filter(donation => {
      //    searchedValue === donation.category
      //    console.log(searchedValue.toLowerCase(), donation.category.toLowerCase());
      // })

      // setDonationData(display);
      // console.log(donationData)
      
   }

   return (
      <div>
         <Banner handleSubmit={handleSubmit}></Banner>
         <div className="grid md:grid-cols-4 gap-5 mt-24 mb-24">
            {
               donationData.map((data, idx) => <Card key={idx} donation={data}></Card>)
            }
         </div>
      </div>
   );
};

export default Home;