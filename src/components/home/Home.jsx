import { useEffect, useState } from "react";
import Banner from "../banner/Banner";
import Card from "../Card/Card";

const Home = () => {

   const [donationData, setDonationData] = useState([]);
   const [displayData, setDisplayData] = useState([]);

   useEffect(()=>{
      fetch("./data.json")
      .then(res => res.json())
      .then(data => {setDonationData(data); setDisplayData(data) })

   },[])

   const handleSubmit = e => {
      e.preventDefault();
      console.log(typeof e.target.search.value);
      console.log(typeof donationData[0].category);
      const searchedValue = e.target.search.value;

      if(searchedValue.toLowerCase() === 'food'){
         const foodCategory = donationData.filter(data => data.category === 'Food');
         setDisplayData(foodCategory);
      }
      else if(searchedValue.toLowerCase() === 'clothing'){
         const ClothingCategory = donationData.filter(data => data.category === 'Clothing');
         setDisplayData(ClothingCategory);
      }
      else if(searchedValue.toLowerCase() === 'education'){
         const EducationCategory = donationData.filter(data => data.category === 'Education');
         setDisplayData(EducationCategory);
      }
      else if(searchedValue.toLowerCase() === 'health'){
         const HealthCategory = donationData.filter(data => data.category === 'Health');
         setDisplayData(HealthCategory);
      }
      else{
         setDisplayData(donationData);
      }
      e.target.search.value = '';
   }

   return (
      <div>
         <Banner handleSubmit={handleSubmit}></Banner>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-24 mb-24">
            {
               displayData.map((data, idx) => <Card key={idx} donation={data}></Card>)
            }
         </div>
      </div>
   );
};

export default Home;