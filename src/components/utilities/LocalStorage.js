

const getStoredDonations = () => {
   const storedDonations = localStorage.getItem('donations');
   if(storedDonations){
      return JSON.parse(storedDonations);
   }
   return [];
}

const saveDonations = id => {
   const donations = getStoredDonations();
   const exist = donations.find(donation => donation === id);

   if(!exist){
      donations.push(id);
      localStorage.setItem('donations', JSON.stringify(donations));
   }
}

export {getStoredDonations, saveDonations};