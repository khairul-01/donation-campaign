import { useEffect, useState } from "react";
import { getStoredDonations } from "../utilities/LocalStorage";
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Statistics = () => {

   const [donatedData, setDonatedData] = useState([]);
   const [dataLength, setDatalength] = useState([]);

   useEffect(() => {
      const storedDonations = getStoredDonations();
      setDonatedData(storedDonations);

      fetch('/data.json')
         .then(res => res.json())
         .then(data => setDatalength(data))
   }, [])

   const data = [
      { name: 'Total Donation', value: dataLength.length },
      { name: 'Your Donation', value: donatedData.length },
   ];

   const COLORS = ['red', '#00C49F'];

   const RADIAN = Math.PI / 180;
   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
         <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
         </text>
      );
   };

   return (
      <div className="flex justify-center">
         {/* <ResponsiveContainer width="100%" height="100%"> */}

            <PieChart width={400} height={400}>
               <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                  
               >
                  {data.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
               </Pie>
               <Legend />

            </PieChart>
         {/* </ResponsiveContainer> */}
      </div>
   );
};

export default Statistics;